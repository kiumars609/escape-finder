import React, { createContext, useState } from "react";

export const WhiteThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("lite");

  return (
    <WhiteThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </WhiteThemeContext.Provider>
  );
}
