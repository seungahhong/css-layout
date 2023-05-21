import { useEffect, useState } from 'react';

interface useInViewProps {
  inView: boolean;
  ref: (node: Element | null) => void;
}

const useInView = ({
  ...rest
}: IntersectionObserverInit = {}): useInViewProps => {
  const [element, setElement] = useState<Element | null>(null);
  const [inView, setView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) {
          return;
        }

        setView(true);
        observer.disconnect();
      },
      { ...rest },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    ref: setElement,
    inView,
  };
};

export default useInView;
