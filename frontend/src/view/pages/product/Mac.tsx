import {Component} from "react";
import image1 from '../../../images/products/mackboockair.png'
export class Mac extends Component {
    render() {
        return (
            <div className="bg-slate-100 mx-auto  p-6 dark:bg-gray-800">
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
            </div>

        );
    }
}