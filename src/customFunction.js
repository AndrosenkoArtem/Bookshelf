import { PurpleParticle } from 'components/HomePage/BookList/BookList.styled';
import React from 'react';

export const addPurpleEnd = words => {
  const splitMassive = words.split(' ');

  if (splitMassive.length === 1) {
    return <span>{words}</span>;
  }

  const oldWordIndex = splitMassive.length - 1;
  const lastWord = splitMassive[oldWordIndex];

  return splitMassive.map((word, index) => {
    if (index === oldWordIndex) {
      return (
        <React.Fragment key={index}>
          <PurpleParticle>{lastWord}</PurpleParticle>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={index}>
        <span>{word}</span>{' '}
      </React.Fragment>
    );
  });
};
export const scrollUp = () => {
  window.scrollTo({
    top: 0,
  });
};
export const scrollDown = () => {
  window.scrollTo(0, document.body.scrollHeight);
};
