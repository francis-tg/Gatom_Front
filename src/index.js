import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./pages/App.jsx";

import "./scss/main.scss";
import TopBar from "./components/TopBar.jsx";
import Services from "./pages/Services.jsx";
import Montant from "./pages/Montant.jsx";
import Transfert from "./pages/Numero.jsx";
import Confirm from "./pages/Confirm.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/index.js";
import EntrerArgent from "./pages/EntrerArgent.jsx";
import {ToastContainer} from "react-toastify";

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
          <Route path='/confirm' element={<Confirm />} />
          <Route path='/put-money' element={<EntrerArgent />} />
        </Routes>
      </div>
    </>
  );
}

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Index />
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

module.hot.accept();
