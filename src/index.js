import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./components/App.jsx";
import "bootstrap/scss/bootstrap.scss";
import "./scss/main.scss";
import TopBar from "./components/TopBar.jsx";
import Services from "./pages/Services.jsx";
import Montant from "./pages/Montant.jsx";
import Transfert from "./pages/services/Transfert.jsx";

function Index() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <div className='mt-5'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/service' element={<Services />} />
          <Route path='/montant' element={<Montant />} />
          <Route path='/service/transfert' element={<Transfert />} />
        </Routes>
      </div>
    </>
  );
}

createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>
);

module.hot.accept();
