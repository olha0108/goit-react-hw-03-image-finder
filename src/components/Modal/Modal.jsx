import React, { Component } from 'react';
import { ModalDiv } from './Modal.styled';
import { OverlayDiv } from './Modal.styled';

export class Modal extends Component {
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      return this.props.onModalClose();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onModalClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { largeImageURL } = this.props;

    return (
      <>
        <OverlayDiv onClick={this.handleBackdropClick}>
          <ModalDiv>
            <img src={largeImageURL} alt="" />
          </ModalDiv>
        </OverlayDiv>
      </>
    );
  }
}
