
import ThemeContext, { themes } from "./context";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DentistCard from "./components/DentistCard";
import Dentist from "./components/Dentist";
import Favs from "./components/Favs";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";


import { useState } from "react";

function App() {

  const [theme,setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  
  return (
    

    <ThemeContext.Provider value={{theme, handleChangeTheme}}>
        <Layout>
            <Navbar/>
            <Home/> 
            <Dentist/>
            <DentistCard/>
            <Favs/>
            <Contact/>
            <ContactForm/>
        </Layout>
      </ThemeContext.Provider>
  )
}

export default App