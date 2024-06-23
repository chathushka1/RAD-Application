import {Component} from "react";
import image1 from '../../../images/products/mac.png'
import image2 from '../../../images/products/phone.jpg'
import image3 from '../../../images/products/ipad.png'
import image4 from '../../../images/products/iwatch.png'
import image5 from '../../../images/products/millingmacinery.png'
import image6 from '../../../images/products/reasonablerates.png'
import image7 from '../../../images/products/timeefficense.png'
import image8 from '../../../images/products/expertise.png'
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

                <section className="bg-gray-100" id="aboutus">
                    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                                <p className="mt-4 text-gray-600 text-lg">
                                    Bappa flour mill provides our customers with the highest quality products and services. We offer a
                                    wide variety of flours and spices to choose from, and we are always happy to help our customers find
                                    the perfect products for their needs.
                                    We are committed to providing our customers with the best possible experience. We offer competitive
                                    prices, fast shipping, and excellent customer service. We are also happy to answer any questions
                                    that our customers may have about our products or services.
                                    If you are looking for a flour and spices service business that can provide you with the highest
                                    quality products and services, then we are the company for you. We look forward to serving you!</p>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <img src={image1} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="text-gray-700 body-font mt-10">
                    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
                        Why Us?
                    </div>
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img src={image5} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img src={image6} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img src={image7} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img src={image8} alt="" className="w-32 mb-3"/>
                                    </div>
                                    <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </>
        );
    }
}