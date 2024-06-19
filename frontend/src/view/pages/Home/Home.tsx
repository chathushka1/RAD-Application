import {Component} from "react";
import image1 from '../../../images/products/mac.png'
import image2 from '../../../images/products/phone.jpg'
import image3 from '../../../images/products/ipad.png'
import image4 from '../../../images/products/iwatch.png'
import {Link} from "react-router-dom";
export class Home extends Component {
    render() {
        return (
            <>
                <section className="text-gray-700 body-font">
                    <div className="flex justify-center mt-10 text-4xl font-regular">
                        Store. The best way to buy the products you love
                    </div>
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <Link to="/mac">
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
                                    <div className="flex justify-center">
                                        <img src={image3} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">iPad</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img src={image4} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Apple Watch</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        );
    }
}