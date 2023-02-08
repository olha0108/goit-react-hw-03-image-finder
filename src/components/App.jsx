import React, { Component } from 'react';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { Modal } from '../components/Modal/Modal';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { fetchImages } from '../services/api.jsx';
import { AppDiv } from './App.styled';
import { Notify } from 'notiflix';
import { Button } from '../components/Button/Button';
import { Loader } from '../components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isLoading: false,
    openModal: false,
  };

  onClickLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true,
    });
    this.fetchGallery(this.state.search, this.state.page + 1);
  };

  openModal = url => {
    this.setState({ openModal: true, largeImageURL: url });
  };

  onModalClose = () => {
    this.setState({ openModal: false, largeImageURL: '' });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.setState({
      search: evt.target.search.value.trim().toLowerCase(),
      isLoading: true,
      images: [],
    });
    this.fetchGallery(evt.target.search.value, this.state.page);
  };

  async fetchGallery(search, page) {
    try {
      const response = await fetchImages(search, page);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...response],
        };
      });
      if (response.length < 1) {
        Notify.failure('Not found');
      }
      {
        response.length >= 12
          ? this.setState({ loadmoreBtn: true })
          : this.setState({ loadmoreBtn: false });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, largeImageURL, isLoading, loadmoreBtn, openModal } =
      this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          images={images}
          openModal={this.openModal}
          onLoadMore={this.onLoadMore}
        />{' '}
        {isLoading && <Loader />}
        {loadmoreBtn && <Button onClickLoadMore={this.onClickLoadMore} />}
        {openModal && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}
      </AppDiv>
    );
  }
}