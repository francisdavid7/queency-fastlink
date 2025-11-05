import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(() => {
    return localStorage.getItem("color-mode") || "light";
  });

  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  const toggleDarkMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
