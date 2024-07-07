import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    albums: [],
  });
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ state, setState, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

