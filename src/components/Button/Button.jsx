import React, { Component } from 'react';
import { Buttonload } from './Button.styled';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <Buttonload onClick={this.props.onClickLoadMore}>Load more</Buttonload>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
