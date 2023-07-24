import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className={styles['ImageGalleryItem-image']} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};


