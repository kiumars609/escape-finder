import React, { createContext, useState } from "react";

export const GermanLanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("De");

  return (
    <GermanLanguageContext.Provider value={{ language }}>
      {children}
    </GermanLanguageContext.Provider>
  );
}
