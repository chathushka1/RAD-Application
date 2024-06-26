import {Component} from "react";
import image1 from '../../../images/products/mackboockair.png'
import image2 from '../../../images/products/mackbookpro1.png'
import image3 from '../../../images/products/imack1.png'
import image4 from '../../../images/products/macmini.png'
export class Mac extends Component {
    render() {
        return (
            /*<div className="bg-slate-100 mx-auto  p-6 dark:bg-gray-800">
                <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-white">
                    <h2>MacBook Air
                        13-inch with M2 chip</h2>
                </div>
                <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">

                    <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
                        <div className="p-4 ">
                            <img className="rounded-lg h-32 w-full" src={image1}/>
                        </div>
                        <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
                            <h2>handbag</h2>
                        </div>
                        <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
                            <div>
                                <h3>price</h3>
                            </div>
                            <div>
                                <h3>mkw 3,000.00</h3>
                            </div>
                        </div>
                        <div className="p-2">
                            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">buy</button>
                        </div>
                    </div>

                    <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
                        <div className="p-4 ">
                            <img className="rounded-lg h-32 w-full" src="https://images.unsplash.com/photo-1566150902887-9679ecc155ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8YmFnfGVufDB8MHx8fDE3MTgzODQ2MDR8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
                        </div>
                        <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
                            <h2>handbag</h2>
                        </div>
                        <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
                            <div>
                                <h3>price</h3>
                            </div>
                            <div>
                                <h3>mkw 3,000.00</h3>
                            </div>
                        </div>
                        <div className="p-2">
                            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">buy</button>
                        </div>
                    </div>

                    <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
                        <div className="p-4 ">
                            <img className="rounded-lg h-32 w-full" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxiYWd8ZW58MHwwfHx8MTcxODM4NDYwNHww&ixlib=rb-4.0.3&q=80&w=1080"/>
                        </div>
                        <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
                            <h2>handbag</h2>
                        </div>
                        <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
                            <div>
                                <h3>price</h3>
                            </div>
                            <div>
                                <h3>mkw 3,000.00</h3>
                            </div>
                        </div>
                        <div className="p-2">
                            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">buy</button>
                        </div>
                    </div>

                    <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
                        <div className="p-4 ">
                            <img className="rounded-lg h-32 w-full" src="https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoYW5kYmFnfGVufDB8MHx8fDE3MTgzODk0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
                        </div>
                        <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
                            <h2>handbag</h2>
                        </div>
                        <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
                            <div>
                                <h3>price</h3>
                            </div>
                            <div>
                                <h3>mkw 3,000.00</h3>
                            </div>
                        </div>
                        <div className="p-2">
                            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">buy</button>
                        </div>
                    </div>

                </div>
            </div>*/

            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
                <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-blue-950">
                    <h2>All models. Take your pick.</h2>
                </div>
                <section
                    className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                    <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={image1} alt=""/>
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
                        <h1 className="text-3xl my-5">MacBook Air</h1>
                        <p className="mb-5">The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.</p>
                        <h2 className="font-semibold mb-5">$999</h2>
                        <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
                    </section>

                    {/*<section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={image2} alt=""/>
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
                        <h1 className="text-3xl my-5">MacBook Pro 14-inch</h1>
                        <p className="mb-5">With M3, M3 Pro, or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects</p>
                        <h2 className="font-semibold mb-5">$1599</h2>
                        <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">Add To Cart</button>
                    </section>

                    <section className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={image3} alt=""/>
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
                        <h1 className="text-3xl my-5">iMac</h1>
                        <p className="mb-5">Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive</p>
                        <h2 className="font-semibold mb-5">$1299</h2>
                        <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">Add To Cart</button>
                    </section>

                    <section className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={image4} alt=""/>
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
                        <h1 className="text-3xl my-5">Mac Mini</h1>
                        <p className="mb-5">Do more and do it faster with the next-generation M2 or M2 Pro chip</p>
                        <h2 className="font-semibold mb-5">$599</h2>
                        <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add To Cart</button>
                    </section>*/}
                </section>
            </section>

        );
    }
}