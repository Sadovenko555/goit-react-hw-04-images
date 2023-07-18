import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onloadMore }) => {
  return (
    <div className={styles['Button-container']} onClick={onloadMore}>
      <button type="button" className={styles.Button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onloadMore: PropTypes.func,
};
