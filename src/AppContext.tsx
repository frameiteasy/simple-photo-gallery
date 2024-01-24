import { createContext, useContext } from 'react';

export type AppDataType = {
  albums?: Album[];
};

export type AppContextType = {
  context?: AppDataType;
  setContext?: (c: AppDataType) => void;
};

export const AppContext = createContext<AppContextType>({});

export const useAppContext = () => useContext(AppContext);
