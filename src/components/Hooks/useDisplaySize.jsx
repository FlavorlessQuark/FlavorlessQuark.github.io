import { useEffect, useState } from 'react';

const getDisplay = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export const useDisplaySize = () => {

    const [Display, setDisplay] = useState(getDisplay());

    const handleResize = () =>
    {
        setDisplay(getDisplay());
    }

    useEffect(() =>
    {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return Display;
}
