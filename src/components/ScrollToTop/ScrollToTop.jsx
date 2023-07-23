import { useEffect, useState } from 'react';
import { Button, UpIcon } from './ScrollToTop.styled';
import { scrollUp } from 'customFunction';

export const ScrollToTop = () => {
  const [isLow, setisLow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setisLow(true) : setisLow(false);
    });
  }, [isLow]);
  return (
    isLow && (
      <Button onClick={() => scrollUp()}>
        <UpIcon />
      </Button>
    )
  );
};
