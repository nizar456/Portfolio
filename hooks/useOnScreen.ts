
import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = <T extends Element,>(ref: RefObject<T>, options: IntersectionObserverInit = { rootMargin: '0px', threshold: 0.1 }): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Disconnect after it becomes visible to prevent re-triggering
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};
