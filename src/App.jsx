import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Home from "./Page/Home";
import Photography from "./Page/Photography";
import Film from "./Page/Film";
import Faq from "./Page/Faq";
import Contact from "./Page/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="photography" element={<Photography />}></Route>
            <Route path="Films" element={<Film />}></Route>
            <Route path="Faq" element={<Faq />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
