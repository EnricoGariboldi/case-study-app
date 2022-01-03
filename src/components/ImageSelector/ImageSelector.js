import PlusIcon from "../../media/PlusIcon";
import "./ImageSelector.css";

const ImageSelector = ( { image, handleClickImageSelector }) => {

    
return(
    <div className="ImageSelector-container" >
        {image ? <div className="ImageSelector-image"><img src={image} alt="img pulled" ></img></div> : 
        <div className="ImageSelector-container" onClick = {handleClickImageSelector} >
            <div className="ImageSelector-Plus"><PlusIcon color="gray"/>
            </div>
        </div> }
    </div>
    )
}

export default ImageSelector





