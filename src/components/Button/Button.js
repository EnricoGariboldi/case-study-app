import "./Button.css";

const Button = ({ type = "primary", handleButtonClick }) => {
  return (
    <div className={`Button-container Button-${type}`} onClick={handleButtonClick}>
        {type === "primary" ? "Approve" : "Reject"}
    </div>
  );
};
export default Button;
