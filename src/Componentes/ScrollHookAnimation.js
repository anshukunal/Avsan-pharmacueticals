import { useEffect, useState } from "react";

const useIsMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(() => {
    // Initial state — runs only on first render
    if (typeof window !== "undefined") {
      return window.innerWidth <= 1024;
    }
    return false;
  });

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // Adjust breakpoint if needed
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobileOrTablet;
};

export default useIsMobileOrTablet;
