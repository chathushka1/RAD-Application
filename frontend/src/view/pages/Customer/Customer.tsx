import { Component } from "react";
import {Link} from "react-router-dom";
import image1 from "../../../images/products/mac.png";
import image2 from "../../../images/products/phone.jpg";
import image3 from "../../../images/products/ipad.png";
import image4 from "../../../images/products/iwatch.png";

export class Customer extends Component {
    render() {
        return (
            <>
                <header className="sticky bg-blue-400 inset-0 z-50 border-b border-slate-100  backdrop-blur-lg rounded">
                    <nav
                        className="mx-auto flex max-w-8xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-4 py-4">
                        <div className="relative flex items-center ml">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img
                                        src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                        className="object-cover btn- h-9 w-9 rounded-full mr-2"
                                        alt=""
                                    />
                                    <div
                                        className="absolute bottom-0 right-1 h-3 w-3 bg-green-400 rounded-full"></div>
                                </div>
                                <p className="font-semibold text-sm">Chathushka</p>
                            </div>
                        </div>
                        <ul className="hidden items-center justify-center gap-10 md:flex ml-4">
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    {/*<Link to="/customer">Rooms</Link>*/}
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/*<Link to="/customer/yourDetails">Your Details</Link>*/}
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    {/*<Link to="/customer/bookCheck">You Book Room</Link>*/}
                                </a>
                            </li>

                        </ul>
                        <div className="flex-grow"></div>
                        <div className="hidden items-center justify-center gap-6 md:flex mr-8">
                            <a href="#"
                               className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm
                               text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200
                               ease-in-out hover:scale-[1.03]">
                                <Link to="/login">Log Out</Link>
                            </a>
                        </div>
                        <div className="relative flex items-center justify-center md:hidden ">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                     className="h-6 w-auto text-slate-900">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>

                <section className="text-gray-700 body-font">
                <div className="flex justify-center mt-10 text-4xl font-regular">
                    Store. The best way to buy the products you love
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <Link to="/customer/product">
                                    <div className="flex justify-center">
                                        <img src={image1} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Mac</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <Link to="/iPhone">
                                    <div className="flex justify-center">
                                        <img src={image2} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">iPhone</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <Link to="/ipad">
                                    <div className="flex justify-center">
                                        <img src={image3} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">iPad</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <Link to="/iwatch">
                                    <div className="flex justify-center">
                                        <img src={image4} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Apple Watch</h2>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            </>
        );
    }
}