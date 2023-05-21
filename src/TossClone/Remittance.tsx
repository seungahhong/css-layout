import cx from 'classnames';
import { SendDatas } from '../helpers/datas/remittance';
import useInView from '../helpers/hooks/useInView';
import type { RemittanceType } from '../types/remittance';
import styles from './Remittance.module.scss';

type RemittanceProps = RemittanceType & { direction: 'forward' | 'reverse' } & {
  inView: boolean;
};

const Content = ({ image, content, direction, inView }: RemittanceProps) => {
  const { src, alt } = image;
  const { badgeContent, title, description } = content;

  return (
    <section
      className={cx(
        styles.content,
        {
          [styles.reverse]: direction === 'reverse',
        },
        { [styles.animation]: inView },
      )}
    >
      <img src={src} alt={alt} aria-label="송금 카드 이미지" />
      <div className={styles.explanation}>
        <div className={styles.badge}>{badgeContent}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </section>
  );
};

const Remittance = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={styles.container}>
      <div className={cx(styles.title, { [styles.animation]: inView })}>
        <h2>송금</h2>
        <p>
          간편하고 안전하게
          <br />
          수수료는 평생 무료로,
          <br />
          이런 송금 써보셨나요?
        </p>
      </div>
      {SendDatas.map((data, index) => (
        <Content
          key={`SendDatas_${index + 1}`}
          image={data.image}
          content={data.content}
          direction={index % 2 === 0 ? 'reverse' : 'forward'}
          inView={inView}
        />
      ))}
    </section>
  );
};

export default Remittance;
