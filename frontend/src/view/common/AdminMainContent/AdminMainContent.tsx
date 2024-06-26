import { Component } from "react";
import {Route, Routes} from "react-router-dom";
import {AdminHome} from "../../pages/AdminHome/AdminHome";
import {AdminProduct} from "../../pages/AdminProduct/AdminProduct";
import {IphoneProduct} from "../../pages/AdminProduct/IphoneProduct";
import {IpadProduct} from "../../pages/AdminProduct/IpadProduct";
import {IwatchProduct} from "../../pages/AdminProduct/IwatchProduct";
export class AdminMainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route>
                        <Route path="/" Component={AdminHome}></Route>
                        <Route path="/addRoom" Component={AdminProduct}></Route>
                        <Route path="/addMac" Component={AdminProduct}></Route>
                        <Route path="/addIphone" Component={IphoneProduct}></Route>
                        <Route path="/addIpad" Component={IpadProduct}></Route>
                        <Route path="/addIwatch" Component={IwatchProduct}></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}