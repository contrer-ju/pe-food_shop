import { createContext, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        language,
        setLanguage,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
