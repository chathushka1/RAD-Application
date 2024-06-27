import {Component} from "react";

import axios from "axios";
import {ToastContainer} from "react-toastify";

interface AcceptProductProps {
    data: any
}

interface AcceptProductState {
    isActive: boolean
    isButtonDisabled: boolean
    isFormOpen: boolean
}
export class ProductAccept extends Component<AcceptProductProps,AcceptProductState> {

    private api: any;

    constructor(props:any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state={
            isActive:false,
            isButtonDisabled: false,
            isFormOpen: false
        }
    }


    render() {

        const {data}= this.props;

        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');


        return (
            <>

                <div className="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div
                        className="mt-4 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-2 space-y-4 md:space-y-6 xl:space-y-0">
                        <div
                            className="flex flex-col justify-start items-start w-full space-y-2 md:space-y-6 xl:space-y-8">
                            <div
                                className="flex flex-col justify-start items-start bg-gray-200 border-black border-2 rounded px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl dark:text-black  leading-6 xl:leading-5 text-gray-800 font-bold">Product Details</p>
                                <div
                                    className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="pb-4 md:pb-8 w-full md:w-64">
                                        <img className="w-full" src={data.image}
                                             alt="Product Image"/>
                                    </div>
                                    <div
                                        className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-black xl:text-2xl font-semibold leading-6 text-gray-800">{data.productName}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                {/*<p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-950 font-bold">Type: </span>{data.room}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Room Count: </span>{data.roomCount}
                                                </p>*/}
                                                <p className="text-sm dark:text-black leading-none text-gray-800"><span
                                                    className="dark:text-blue-950  text-gray-950 font-bold">Description: </span>{data.description}
                                                </p>
                                                <p className="text-sm dark:text-black leading-none text-gray-800"><span
                                                    className="dark:text-blue-950  text-gray-950 font-bold">Date: </span>{data.bookingDateTime}
                                                </p>
                                                <p className="text-sm dark:text-black leading-none text-gray-800"><span
                                                    className="dark:text-blue-950  text-gray-950 font-bold">Contact: </span>{data.customerContact}
                                                </p>
                                                <p className="text-sm dark:text-black leading-none text-gray-800"><span
                                                    className="dark:text-blue-950  text-gray-950 font-bold">Address: </span>{data.customerAddress}
                                                </p>
                                                <p className="text-sm dark:text-black leading-none text-gray-800"><span
                                                    className="dark:text-blue-950  text-gray-950 font-bold">Email: </span>{data.customerEmail}
                                                </p>
                                                <div className={`left-2 px-1 py-1 m-2 rounded-md text-sm font-medium
                            ${data.productBook === 'Buy' ? 'bg-green-400 text-text-black' : 'bg-red-400 text-white'
                                                }`}>{data.productBook}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}