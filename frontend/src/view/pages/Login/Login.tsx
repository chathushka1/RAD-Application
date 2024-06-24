
import React, { useState } from 'react';
import './login.css';
import logo from '../../../images/products/ipadpro11.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createBrowserHistory} from "history";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // @ts-ignore
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const onLoginButtonClick = () => {
        try {
            const history = createBrowserHistory();

            const location = history.location;
            axios.post('http://localhost:4000/signUser/oneUser', {
                email,
                password,
            }).then((res) => {
                const jsonData = res.data;
                if (jsonData) {
                    localStorage.setItem('signUserDetails', JSON.stringify(jsonData));
                    toast.success(`Your Successful Login: ${jsonData.firstName}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    let redirectUrl = jsonData.isAdmin ? "/customer" : "/admin";
                    redirectUrl += `?firstName=${encodeURIComponent(jsonData.firstName)}&email=${encodeURIComponent(jsonData.email)}`;
                    history.push(redirectUrl);
                    history.go(0);
                }
            }).catch((error) => {
                toast.error("You don't have an account, Try Sign up first");
            });
        } catch (error) {
            toast.error('Error signing in');
        }
    };



    // @ts-ignore
    const handleLoginSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
        console.log('Token:', token);

        const res = await fetch('http://localhost:4000/signUser/googleRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const jsonData = await res.json();
        if (jsonData) {
            localStorage.setItem('signUserDetails', JSON.stringify(jsonData));
            toast.success(`Your Successful Login: ${jsonData.firstName}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            const history = createBrowserHistory();
            let redirectUrl = jsonData.isAdmin ? "" : "/customer";
            redirectUrl += `?firstName=${encodeURIComponent(jsonData.firstName)}&email=${encodeURIComponent(jsonData.email)}`;
            history.push(redirectUrl);
            history.go(0);
        }

        const data = await res.json();
        console.log(data);
    };



    const clientId = '';

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>
                            <img src={logo} className="w-mx-auto rounded" />
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">

                                </div>
                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign In with Cartesian E-mail
                                    </div>
                                </div>
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" name="email" value={email} onChange={handleInputChange}
                                        placeholder="Email"/>
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" name="password" value={password} onChange={handleInputChange}
                                        placeholder="Password"/>
                                    <button onClick={onLoginButtonClick}
                                            className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                            <circle cx="8.5" cy="7" r="4"/>
                                            <path d="M20 8v6M23 11h-6"/>
                                        </svg>
                                        <span className="ml-">Sign In <ToastContainer/></span>
                                    </button>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="border-b w-1/5 md:w-1/4"></span>
                                        <a href="#" className="text-xs text-gray-500 uppercase">
                                            <Link to="/sign">or sign up</Link>
                                        </a>
                                        <span className="border-b w-1/5 md:w-1/4"></span>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="border-b w-1/5 md:w-1/4"></span>
                                        <a href="#" className="text-xs text-gray-500 uppercase">
                                            <Link to="/home">Home Page</Link>
                                        </a>
                                        <span className="border-b w-1/5 md:w-1/4"></span>
                                    </div>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by Cartesian Kinetics
                                        <a href="#" className="border-b border-gray-500 border-dotted">Terms of
                                            Service</a> and its <a href="#"
                                                                   className="border-b border-gray-500 border-dotted">Privacy
                                        Policy</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                        <div id="content" className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
