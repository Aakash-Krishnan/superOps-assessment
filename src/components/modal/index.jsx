/* eslint-disable react/prop-types */
import "./style.css";

const Modal = ({ onClose }) => {
  const handleClick = () => {
    onClose(false);
  };

  return (
    <div className="modal-container" onClick={(e) => handleClick(e)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <p className="cancel" onClick={() => onClose(false)}>
            x
          </p>
        </div>

        <div className="input-div">
          <p className="detail-label">Your details</p>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
