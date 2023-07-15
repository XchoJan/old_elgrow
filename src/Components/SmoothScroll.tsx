import { useEffect } from 'react';
import { gsap } from 'gsap';

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();

      const { deltaY } = event;
      const target = window.scrollY + deltaY;

      gsap.to(window, {
        duration: 0.1,
        scrollTo: { y: target },
        ease: 'Expo.easeOut',
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
