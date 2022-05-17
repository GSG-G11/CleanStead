import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ModalLoginContext = createContext();

function ModalLoginProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <ModalLoginContext.Provider
      value={{ isOpen, setIsOpen, isLogged, setIsLogged }}
    >
      {children}
    </ModalLoginContext.Provider>
  );
}

ModalLoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ModalLoginProvider, ModalLoginContext };
