import { useState, useEffect } from "react";

function UseHeaderScroll(top = 50) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > top);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);
  return scrolled;
}

export default UseHeaderScroll;

