import React, { createContext, useState } from 'react';

export const MapContext = createContext(null);

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  );
};
