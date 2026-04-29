import React, { createContext, useState } from "react";

export const GermanLanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("De");

  return (
    <GermanLanguageContext value={language}>{children}</GermanLanguageContext>
  );
}
