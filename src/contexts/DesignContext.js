import React, { createContext, useContext, useState } from 'react';
import { DESIGN } from '../config/design';

// Holds the active sky/player variants. Defaults come from config/design.js;
// the /lab page can override them for the current session only.
const DesignContext = createContext(null);

export const useDesign = () => useContext(DesignContext);

export const DesignProvider = ({ children }) => {
  const [sky, setSky] = useState(DESIGN.sky);
  const [player, setPlayer] = useState(DESIGN.player);
  const [cooking, setCooking] = useState(DESIGN.cooking);
  return (
    <DesignContext.Provider value={{ sky, setSky, player, setPlayer, cooking, setCooking }}>
      {children}
    </DesignContext.Provider>
  );
};
