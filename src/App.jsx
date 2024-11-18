import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Home from "./Page/Home";
import Photography from "./Page/Photography";
import Film from "./Page/Film";
import Faq from "./Page/Faq";
import Contact from "./Page/Contact";
import LoginPage from "./components/LoginPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* If the user is authenticated, render the main layout */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="photography" element={<Photography />} />
              <Route path="films" element={<Film />} />
              <Route path="faq" element={<Faq />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </>
        ) : (
          // If not authenticated, render the login page
          <Route
            path="*"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
