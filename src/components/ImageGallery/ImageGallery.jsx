import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  openModal: PropTypes.func,
};
