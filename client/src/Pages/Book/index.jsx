import React from 'react';
import BookContainer from '../../Components/BookNow/BookContainer';
import { ModalLoginProvider } from '../../Contexts/ModalLogin';

function Book() {
  return (
    <ModalLoginProvider>
      <BookContainer />
    </ModalLoginProvider>
  );
}

export default Book;
