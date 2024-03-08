import { BrowserRouter } from "react-router-dom";
import './App.css'

import {
  About,
  Contact,
  Offers,
  Feedbacks,
  Hero,
  Navbar,
  PreSales,
} from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

 

  return (
    <BrowserRouter>
    <div className=""></div>
      <div className={`relative z-0 ${toggle ? 'bg-black/10' : 'bg-slate-200'}  `} >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar toggle={toggle} setToggle={setToggle} />
          <Hero />
        </div>

        <div className="bg-black-100">
          {" "}
          <About />
        </div>

        <Offers />
        

        <div className="bg-black-100">
        <PreSales />
        </div>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
