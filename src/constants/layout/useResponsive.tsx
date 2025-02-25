import { useState, useEffect } from 'react';
import { BREAKPOINTS } from './layout';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINTS.MOBILE);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINTS.MOBILE);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};