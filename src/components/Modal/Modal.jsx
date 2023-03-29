import React, { useEffect } from 'react';



import { Overlay, ModalWindow } from './Modal.styled';

const Modal = ({onClose , url}) => {

    useEffect (() => {
      const  onEscClick = e => {
        if (e.code === 'Escape') {
          onClose();
        }
        }

      document.addEventListener('keydown', onEscClick);
      return () => {
      document.removeEventListener('keydown',onEscClick);
      }
    },[onClose]);

    const onOverlayClick = e => {
      if (e.currentTarget === e.target)
    onClose();

    };
  return (
    <Overlay onClick={onOverlayClick}>
    <ModalWindow>
      <img src={url} alt='' />
    </ModalWindow>
  </Overlay>
  )
}
export default Modal;

/*export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>
          <img src={this.props.url} alt='' />
        </ModalWindow>
      </Overlay>
    );
  }
}
Modal.propTypes = {
    url:PropTypes.string.isRequired,
    onClose:PropTypes.func.isRequired
}*/