import React from 'react';
import './App.css';

// @ts-ignore
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {SignIn} from "./view/pages/SIgnIn/SignIn";
import Login from "./view/pages/Login/Login";
import {Admin} from "./view/pages/Admin/Admin";
import {Customer} from "./view/pages/Customer/Customer";

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

              <Route path="/login"
                     Component={Login}>
              </Route>

              <Route path="/admin/*"
                     Component={Admin}>
              </Route>

              <Route path="/customer/*" Component={Customer}>

              </Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
