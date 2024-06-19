import {Component} from "react";
//@ts-ignore
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";
import {Mac} from "../../pages/product/Mac";
import {Iphone} from "../../pages/product/Iphone";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/mac" Component={Mac}></Route>
                    <Route path="/iphone" Component={Iphone}></Route>
                    <Route path="/shopping-cart"
                           element={<ShoppingCart
                               itemsList={ModifyCart.itemsList}/>
                                   }>
                    </Route>
                </Routes>
            </div>
        );
    }
}