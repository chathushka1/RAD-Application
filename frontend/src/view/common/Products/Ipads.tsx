import {Component} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface ProductProps{
    data : any
}

interface ProductState{
    isActive : boolean
    isButtonDisabled: boolean
    isImagePopupOpen: boolean;
}

export class Ipads extends Component<ProductProps,ProductState> {
    render() {
        return (
            <></>
        );
    }
}