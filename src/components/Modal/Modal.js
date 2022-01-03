import React from 'react';
import './Modal.css';
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, successCallback, displayModalImage}) => {

  return(

  <div className="darkBG">
          <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Warning, content: Are you sure to delete this image?</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            {displayModalImage()}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => {
                successCallback()
                setIsOpen(false)
              }}>
                Delete
              </button>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Modal;
