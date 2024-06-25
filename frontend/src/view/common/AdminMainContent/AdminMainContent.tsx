import { Component } from "react";
import {Route, Routes} from "react-router-dom";
import {AdminHome} from "../../pages/AdminHome/AdminHome";
import {AdminProduct} from "../../pages/AdminProduct/AdminProduct";
export class AdminMainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route>
                        <Route path="/" Component={AdminHome}></Route>
                        <Route path="/addRoom" Component={AdminProduct}></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}