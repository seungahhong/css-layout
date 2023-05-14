import { IoIosArrowDown } from 'react-icons/io';
import styles from './KeyVisual.module.scss';

interface KeyVisualProps {
  handleClick: () => void;
}

const KeyVisual = ({ handleClick }: KeyVisualProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.image} aria-hidden />
      <div className={styles.gradient} aria-hidden />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            금융의 모든 것<br />
            토스에서 쉽고 간편하게
          </h1>
          <div className={styles.link}>
            <a
              className={styles.apple}
              href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
            >
              App Store
            </a>
            <a
              className={styles.goole}
              href="https://play.google.com/store/apps/details?id=viva.republica.toss"
            >
              Google Play
            </a>
          </div>
        </div>
        <button
          type="button"
          className={styles.arrowButton}
          aria-label="아래로"
          onClick={() => handleClick()}
        >
          <IoIosArrowDown />
        </button>
      </div>
    </section>
  );
};

export default KeyVisual;
