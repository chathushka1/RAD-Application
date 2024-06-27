import {Component} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
    isButtonDisabled: boolean
    isFormOpen: boolean
}
export class CustomerIpads extends Component<ProductProps,ProductState>{

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

        const buttonStyle = {
            backgroundColor: this.state.isButtonDisabled ? 'gray' : 'bg-blue-500',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px',
            borderRadius: '5px',
            cursor: this.state.isButtonDisabled ? 'not-allowed' : 'pointer',
        };

        const {data}= this.props;


        return (
            <>
                <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img src={data.image} alt=""/>
                    <div className="space-x-1 flex justify-center mt-10">
                        <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                            <path
                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                            </path>
                        </svg>
                        <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                            <path
                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                            </path>
                        </svg>
                        <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                            <path
                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                            </path>
                        </svg>
                        <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                            <path
                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                            </path>
                        </svg>
                        <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 14 14">
                            <path
                                d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                            </path>
                        </svg>
                    </div>
                    <h1 className="text-3xl my-5">{data.productName}</h1>
                    <p className="mb-5">{data.description}</p>
                    <h2 className="font-semibold mb-5">${data.price}</h2>
                    <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                            onClick={this.handleClick} disabled={this.state.isButtonDisabled}
                            style={buttonStyle}>
                        By Now

                        <ToastContainer/>
                    </button>
                </section>
            </>
        );
    }

    private handleClick = () => {
        //this.setState({ isFormOpen: true });

        const confirmed = window.confirm("Are you sure you want to book this room?");

        if (!confirmed) {
            toast.warning("Booking canceled.");
            return;

        }


        try {

            const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');


            if (this.props.data.availability === 'available') {
                // this.setState({ isButtonDisabled: true });
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString();

                /* const currentDate = moment().tz('Asia/Colombo');
                 const formattedDate = currentDate.toISOString();*/



                this.api.post(`/customer/byTheRoom`, {
                    id: this.props.data.id,
                    title: this.props.data.title,
                    price: this.props.data.price,
                    image: this.props.data.image,
                    room: this.props.data.room,
                    roomCount: this.props.data.roomCount,
                    description: this.props.data.description,
                    availability: this.props.data.availability,
                    roomsIsBooked: this.props.data.roomsIsBooked,
                    signUserDetails: this.props.data.signUserDetails,
                    customerID: signUserDetails.objectId,
                    customerName: signUserDetails.firstName + " " + signUserDetails.lastName,
                    customerEmail: signUserDetails.email,
                    customerContact: signUserDetails.contact,
                    customerAddress: signUserDetails.address,
                    bookingDateTime: formattedDate,



                }).then((response: any) => {
                    console.log("By Room", response);
                    toast.success("By Room Is Booking.Now You File Payment From");
                }).catch((error: any) => {
                    console.log("Not By Room", error);
                    toast("Not By Room" + error);
                }).finally(() => {
                    this.setState({ isButtonDisabled: true });
                });
            } else {
                console.log("Room not available");
                toast.error("Room not available");
            }
        } catch (error) {
            console.log("Not By Room", error);
            toast("Not By Room" + error);
            // this.setState({ isButtonDisabled: false });
        }
    }
}