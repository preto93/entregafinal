
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Detail from "./routes/Detail";
import Favs from  "./routes/Favs";
import Footer from "./components/Footer";
import { routes } from "./routes.js";
import { useDentistStates } from "./components/utils/context";

function App() {

  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? 'App' : 'dark'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.details} element={<Details />} />
        <Route path={routes.favs} element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );  
}


export default App
