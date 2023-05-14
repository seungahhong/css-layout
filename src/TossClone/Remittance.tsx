import cx from 'classnames';
import useInView from '../helpers/hooks/useInView';
import styles from './Remittance.module.scss';

const Remittance = () => {
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <section className={styles.container}>
      <div
        className={cx(styles.title, { [styles.animation]: titleInView })}
        ref={titleRef}
      >
        <h2>송금</h2>
        <p>
          간편하고 안전하게
          <br />
          수수료는 평생 무료로,
          <br />
          이런 송금 써보셨나요?
        </p>
      </div>
    </section>
  );
};

export default Remittance;
