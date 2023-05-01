import React from 'react';
import styles from './KeyVisual.module.scss';

interface KeyVisualProps {
  handleClick: () => void;
}

const KeyVisual = ({ handleClick }: KeyVisualProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.image} />
      <div className={styles.content}>
        <h1>
          금융의 모든 것<br />
          토스에서 쉽고 간편하게
        </h1>
        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => handleClick()}
        >
          아래로
        </button>
      </div>
    </section>
  );
};

export default KeyVisual;
