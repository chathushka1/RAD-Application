import React from 'react';
import './App.css';

// @ts-ignore
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {SignIn} from "./view/pages/SIgnIn/SignIn";
import Login from "./view/pages/Login/Login";
import {Admin} from "./view/pages/Admin/Admin";
import {Customer} from "./view/pages/Customer/Customer";
import {CustomerProduct} from "./view/common/CustomerProduct/CustomerProduct";
import {CustomerMac} from "./view/pages/CustomerAccount/CustomerMac";
import {CustomerIphone} from "./view/pages/CustomerAccount/CustomerIphone";
import {CustomerIpad} from "./view/pages/CustomerAccount/CustomerIpad";
import {CustomerIwatch} from "./view/pages/CustomerAccount/CustomerIwatch";
import {CustomerProductAccept} from "./view/pages/CustomerProductAccept/CustomerProductAccept";


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

              <Route path="/customer/product" Component={CustomerMac}>
              </Route>

              <Route path="/customer/iPhones" Component={CustomerIphone}>
              </Route>

              <Route path="/customer/iPads" Component={CustomerIpad}>
              </Route>

              <Route path="/customer/iWatches" Component={CustomerIwatch}>
              </Route>

              <Route path="/customer/bookProduct" Component={CustomerProductAccept}>
              </Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
