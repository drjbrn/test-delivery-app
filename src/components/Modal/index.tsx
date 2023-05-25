import CloseIcon from '@mui/icons-material/Close';
import './Modal.scss';

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div className='modal'>
      <div className='modal__content'>
        <p className='modal__text'>
          Your order has been accepted!
        </p>
        <button
          onClick={closeModal}
          className='modal__btn'
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;