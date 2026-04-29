// import './App.css'

import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Payment from "./Pages/Payment";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./assets/Context/Theme/ThemeContext";
import { LanguageProvider } from "./assets/Context/Language/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
