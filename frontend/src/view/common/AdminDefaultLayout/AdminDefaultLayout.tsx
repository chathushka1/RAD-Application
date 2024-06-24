import {Component} from "react";


import {Admin} from "../../pages/Admin/Admin";
import {Route, Routes} from "react-router-dom";
export class AdminDefaultLayout extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/*" Component={Admin}></Route>
                </Routes>
            </>
        );
    }
}