
import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);
};

export default useSmoothScroll;
