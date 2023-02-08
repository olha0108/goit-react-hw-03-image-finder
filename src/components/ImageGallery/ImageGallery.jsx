import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import { ImageGalleryContainer } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryContainer>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ImageGalleryContainer>
  );
};
