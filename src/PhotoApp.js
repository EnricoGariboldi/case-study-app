import "./PhotoApp.css";
import ImageSelector from "./components/ImageSelector/ImageSelector";
import ApprovalSection from "./components/ApprovalSection/ApprovalSection";
import ApprovedImagesSection from "./components/ApprovedImagesSection/ApprovedImagesSection";
import fetchPhotoRequest from "./services/fetchPhotoRequest";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";

const mockImageList = [
  "https://images.unsplash.com/photo-1637680882990-f425ed78da0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNDgzODI&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638043880953-2f36db6a6cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNDgzODQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638302030381-5eb2b104be9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNDgzODc&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638401985661-70b21ca6db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNzcwNjY&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638882745833-8bd6f1b43024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNzcwNjM&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638307430347-20b47681a160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNzcwNTg&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1637680882990-f425ed78da0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNDgzODI&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638043880953-2f36db6a6cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNDgzODQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638302030381-5eb2b104be9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNDgzODc&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638401985661-70b21ca6db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNzcwNjY&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638882745833-8bd6f1b43024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNzcwNjM&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1638307430347-20b47681a160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDAyNzcwNTg&ixlib=rb-1.2.1&q=80&w=1080",
];

const PhotoApp = () => {
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);
  const [enableButtons, setEnableButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState();
  const [modalUrl, setModalUrl] = useState();
  const [numSlide, setNumSlide] = useState(0);

  const handleFetchPhotoRequest = async () => {
    const url = await fetchPhotoRequest();
    url && setImage(url);
    setEnableButtons(true);
  };
  const handleFetchPhotoApprove = () => {
    let imageListApproved = imageList;
    imageListApproved.push(image);
    setImageList(imageListApproved);
    handleFetchPhotoRequest();
  };
  const handleImageDeleter = () => {
    const imageListUpdated = mockImageList.splice(modalIndex, 1);
    setImageList(imageListUpdated);
  };

  const viewModalImage = () => {
    return (
      <div className="PhotoApp-modalImage">
        <img src={modalUrl} alt="modal"></img>
      </div>
    );
  };

  const location = useLocation();
  let navigate = useNavigate();

  const logout = () => {
    navigate('/');
  }

  return (
    <div className="PhotoApp">

      <div><h1>Ciao, {location.state}</h1></div>


      <ApprovedImagesSection
        imageList={mockImageList}
        handleClickImageDeleter={(index, imageUrl) => {
          setIsOpen(true);
          setModalIndex(index);
          setModalUrl(imageUrl);
        }}
        handleChangeNumSlide={operator => setNumSlide(numSlide + operator)}
        currentSlide={numSlide}
      />
      <ImageSelector
        handleClickImageSelector={() => handleFetchPhotoRequest()}
        image={image}
      />
      {enableButtons ? (
        <ApprovalSection
          handleClickImageChange={() => handleFetchPhotoRequest()}
          handleClickImageApprove={() => handleFetchPhotoApprove()}
        />
      ) : (
        <div className="PhotoApp-text">
          <h4>Click on the + in order to get image recommendations</h4>
        </div>
      )}
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          successCallback={() => handleImageDeleter()}
          displayModalImage={() => viewModalImage()}
        />
      )}
      <div className="Photoapp-logout Button" onClick={logout} >Logout</div>
    </div>
    
  );
};
export default PhotoApp;
