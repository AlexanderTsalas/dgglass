import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useServicesAnimation = (sectionRef: React.RefObject<HTMLDivElement | null>, gridRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-group", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, gridRef]);
};
