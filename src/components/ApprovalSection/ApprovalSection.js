import "./ApprovalSection.css"
import Button from "../Button/Button";

const ApprovalSection = ( {handleClickImageChange, handleClickImageApprove, isEmpty=false} ) => {

    return(

    <div className="ApprovalSection-container">

        

        <Button type="secondary" handleButtonClick={handleClickImageChange} />
        <Button type="primary" handleButtonClick={handleClickImageApprove}/>
    </div>   

    )


}

export default ApprovalSection;