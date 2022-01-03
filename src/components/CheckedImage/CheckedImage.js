import './CheckedImage.css';
import PlusIcon from "../../media/PlusIcon";


const CheckedImage = ( {image, isDisabled = false }) => {
    
return(
    <div className={`CheckedImage-container ${isDisabled ? "CheckedImage-disabled" : ""}`} >
        {isDisabled ? <PlusIcon color="gray" width='20px' height='20px'/> : 
         <img src={image} alt="alt prop"></img> }
    </div>
)


}
export default CheckedImage;