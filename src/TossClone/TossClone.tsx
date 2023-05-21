import { useRef } from 'react';
import Description from './Description';
import KeyVisual from './KeyVisual';
import Remittance from './Remittance';

const TossClone = () => {
  const descriptionRef = useRef<HTMLElement>(null);
  const handleArrowLink = () => {
    if (descriptionRef.current && descriptionRef.current.offsetTop > 0) {
      window.scrollTo({
        top: descriptionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main>
      <KeyVisual handleClick={handleArrowLink} />
      <Description descriptionRef={descriptionRef} />
      <Remittance />
    </main>
  );
};

export default TossClone;
