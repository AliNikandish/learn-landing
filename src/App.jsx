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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-slate-200 " >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
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
