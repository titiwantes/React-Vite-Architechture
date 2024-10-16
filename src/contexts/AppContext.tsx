import React, { createContext, useState, useEffect } from "react";

export type Theme = "light" | "dark";

export interface AppContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

type Props = {
  children: JSX.Element;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
