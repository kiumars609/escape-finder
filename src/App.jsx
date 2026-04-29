// import './App.css'

import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Payment from "./Pages/Payment";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./assets/Context/Theme/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
