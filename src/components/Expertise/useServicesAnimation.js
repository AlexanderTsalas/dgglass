import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useServicesAnimation = (sectionRef, gridRef) => {
  useEffect(() => {
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
