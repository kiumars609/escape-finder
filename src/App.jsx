// import './App.css'

import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Payment from "./Pages/Payment";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./assets/Context/Theme/ThemeContext";
import { LanguageProvider } from "./assets/Context/Language/LanguageContext";
import { BookingProvider } from "./assets/Context/Booking/BookingContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <BookingProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room/:id" element={<Room />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </BookingProvider>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
