import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const changeTheme = () => {
    localStorage.setItem("theme", !currentTheme);
    setCurrentTheme(!currentTheme);
  };
  const theme = {
    currentTheme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
