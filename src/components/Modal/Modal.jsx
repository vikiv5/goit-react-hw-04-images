import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


import { Overlay, ModalWindow } from './Modal.styled';

const Modal = ({onClose , url}) => {

   const onOverlayClick = e => {
      if (e.currentTarget === e.target)
    onClose();

    };

    useEffect (() =>{
      const  onEscClick = e => {
        if (e.code === 'Escape')
          onClose();
      window.addEventListener('keydown', onEscClick);}
      return () => {
        window.removeEventListener('keydown',onEscClick);
      }
    },[onClose])
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