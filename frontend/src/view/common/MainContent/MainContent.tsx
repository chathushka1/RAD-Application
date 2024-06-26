import {Component} from "react";
//@ts-ignore
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Mac} from "../../pages/product/Mac";
import {Iphone} from "../../pages/product/Iphone";
import {Ipad} from "../../pages/product/Ipad";
import {Iwatch} from "../../pages/product/Iwatch";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/home" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/mac" Component={Mac}></Route>
                    <Route path="/iphone" Component={Iphone}></Route>
                    <Route path="/ipad" Component={Ipad}></Route>
                    <Route path="/iwatch" Component={Iwatch}></Route>
                </Routes>
            </div>
        );
    }
}