import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;

  return (
    <div className={styles.bookContainer}>
      <div>
        <div className={styles.bookInfo}>
          <div>{id}</div>
          <div>{title}</div>
          <div>{category}</div>
          <div>
            <button onClick={() => removeBook(id)} id={id} type="button">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className={styles.progressInfoContainer}>
        <div className={styles.wrapper}>
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>
        <div className={styles.progressInfoChild}>
          <h2 className={styles.percentComplete}>64%</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className={styles.bookCurrentState}>
        <p className={styles.currentChapter}>current chapter</p>
        <p className={styles.currentLesson}>Chapter 17: A lesson learned</p>
        <button className={styles.rectangle2} type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
