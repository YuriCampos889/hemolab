import { useEffect, useRef } from 'react';

export default function useAutoScroll(delay = 600, offset = 120) {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      setTimeout(() => {
        const rect = targetRef.current.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY - offset,
          behavior: 'smooth'
        });
      }, delay); 
    }
  }, [delay, offset]); 

  return targetRef;
}