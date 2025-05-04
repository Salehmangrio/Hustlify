import { gsap } from "gsap";

export const animateFromTo=(element)=>{
    gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
}