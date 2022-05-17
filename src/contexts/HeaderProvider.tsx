import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type HeaderContextProps = {
  headerIsActive: boolean;
  setHeaderIsActive: Dispatch<SetStateAction<boolean>>;
  toggleHeader: () => void;
  closeHeader: () => void;
};

const HeaderContext = createContext({} as HeaderContextProps);

export const useHeader = () => useContext(HeaderContext);

type HeaderProviderProps = {
  children: ReactNode;
};

export const HeaderProvider: FC<HeaderProviderProps> = ({ children }) => {
  const [headerIsActive, setHeaderIsActive] = useState(false);
  const toggleHeader = () => {
    setHeaderIsActive((prevState) => !prevState);
  };
  const closeHeader = () => {
    setHeaderIsActive(false);
  };

  return (
    <HeaderContext.Provider
      value={{ headerIsActive, setHeaderIsActive, toggleHeader, closeHeader }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
