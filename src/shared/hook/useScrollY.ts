import { useEffect, useState } from "react";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", updateScrollY);
    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  return scrollY;
};
