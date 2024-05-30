import React from "react";
import './App.css';




import HomePage from "./Pages/Home Page/Home";
// import AboutPage from "./Pages/About Page/about";
// import ContactForm from "./Components/Contact Form/contact-form";
// import Footer from "./Components/Footer/footer";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import Cities from "./Pages/Cities/cities";
import Prishtina from "./Pages/Prishtina/prishtina";
import Drinks from "./Pages/Prishtina/drinkspage";








function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage/>}></Route>
          {/*<Route path={'/about'} element={<AboutPage/>}/>*/}
          {/*  <Route path={'/contact'} element={<ContactForm></ContactForm>}/>*/}
            <Route path={'city'} element={<Cities/>}/>
            <Route path={'prishtina'} element={<Prishtina></Prishtina>}/>
            <Route path={'drinkspage'} element={<Drinks></Drinks>}/>











        </Routes>
      </BrowserRouter>



  );
}

export default App;
