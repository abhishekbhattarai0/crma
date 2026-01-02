
import { useEffect, useState } from "react";

const useScreenSize = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // Set initial value
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
};

export default useScreenSize;
