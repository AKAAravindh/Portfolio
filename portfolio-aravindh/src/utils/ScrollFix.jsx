import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollFix() {
  const { pathname } = useLocation();

  useEffect(() => {
    // reset scroll
    window.scrollTo(0, 0);

    // refresh GSAP ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [pathname]);

  return null;
}
