import React from 'react';
import './App.css';
import {Navbar} from "./view/common/Navbar/Navbar";
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";
// @ts-ignore
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {SignIn} from "./view/pages/SIgnIn/SignIn";

function App() {
  return (
      <BrowserRouter>
         {/*<DefaultLayout/>*/}
         {/* <Login/>*/}
          <Routes>
              <Route path="/*"
                     Component={DefaultLayout}>
              </Route>

              <Route path="/signin"
                     Component={SignIn}>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
