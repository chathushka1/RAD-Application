import {Component} from "react";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {ProductAccept} from "../../common/ProductAccept/ProductAccept";

interface PaymentProps {
    data: any
}

interface PaymentState {
    data: any
    id:string
    customerEmail: string
    totalPayment: string
    customerName: string
    customerContact: string
    customerAddress: string
    productName: string
    price:number
    customerPaymentDate: string
    bookingDateTime: string



}


export class Payment extends Component<PaymentProps,PaymentState> {

    private api:any;

    constructor(props: any) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={
            data:[],
            id:"",
            customerEmail:'',
            totalPayment:'',
            customerName:'',
            customerContact:'',
            customerAddress:'',
            productName:'',
            price:0,
            customerPaymentDate:'',
            bookingDateTime:''


        }
    }

    componentDidMount() {
        this.fetchData()
    }


    fetchData = async () => {
        // @ts-ignore
        const { customerEmail } = this.state;

        try {
            const response = await this.api.get(`/byProduct/booking/${customerEmail}`);
            const jsonData = response.data;
            this.setState({ data: jsonData });

            // @ts-ignore
            const totalPayment = jsonData.reduce((total, product) => {
                return total + (product.productBook === 'Buy' ? product.price : 0);
            }, 0);

            this.setState({ totalPayment: totalPayment.toFixed(2) }); // Assuming totalPayment is a decimal value
        } catch (error) {
            console.error("Axios Error", error);
            console.error("Data NOT Loaded", error);
        }
    };

    handleEmailChange = (e:any) => {
        this.setState({ customerEmail: e.target.value });
    };

    handleSendClick = () => {
        this.fetchData();
    };

    handleDownloadPDF = () => {
        const input = document.getElementById("pdf-content");

        if (input) {
            html2canvas(input, { scale: 2 }).then((canvas) => {
                const pdf = new jsPDF("p", "mm", "a4");
                const imgWidth = pdf.internal.pageSize.getWidth();
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                const pageHeight = pdf.internal.pageSize.getHeight();
                let heightLeft = imgHeight;
                let position = 0;

                // Add the image content
                pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                // Add extra pages if necessary
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                const { data } = this.state;

                // Adjust the position for text details
                let yOffset = imgHeight + 10; // Start after the image content
                if (heightLeft < 0) {
                    yOffset = 10; // Start at the top of a new page if content overflows
                    pdf.addPage();
                }

                pdf.setFontSize(12);
                pdf.text("Card Details:", 10, yOffset);

                yOffset += 10; // Add some spacing after "Card Details:"

                data.forEach((product: any, index: number) => {
                    const text = `${index + 1}. Room Name: ${product.title}, Price: ${product.price}`;
                    if (yOffset > pageHeight - 10) {
                        yOffset = 10; // Reset yOffset and add a new page
                        pdf.addPage();
                    }
                    pdf.text(text, 10, yOffset);
                    yOffset += 10; // Move to the next line
                });

                pdf.save("payment_details.pdf");
            }).catch(error => {
                console.error("Error generating PDF", error);
                toast.error("Error generating PDF");
            });
        } else {
            console.error("Element with ID 'pdf-content' not found");
            toast.error("Element with ID 'pdf-content' not found");
        }
    };

    render() {
        // @ts-ignore
        const { data, customerEmail, totalPayment } = this.state;
        return (
            <>
                <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto overflow-y-scroll overflow-x-hidden">
                    <div className="flex justify-start items-start space-y-2 flex-col">
                        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                            Payment Details
                        </h1>
                    </div>

                    <div id="product-modal" className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="customerEmail"
                                           className="text-sm font-medium text-gray-900 block mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="customerEmail"
                                        id="customerEmail"
                                        value={customerEmail}
                                        onChange={this.handleEmailChange}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="totalPayment"
                                           className="text-sm font-medium text-gray-900 block mb-2">
                                        Total Payment
                                    </label>
                                    <input
                                        type="text"
                                        name="totalPayment"
                                        id="totalPayment"
                                        value={totalPayment}
                                        readOnly
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="Total Payment"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="p-6 border-t space-x-3 border-gray-200 rounded-b">
                            <button
                                className="text-white bg-yellow-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                                onClick={this.handleSendClick}
                            >
                                Send
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-emerald-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                            >
                                Clear
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-emerald-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                                onClick={this.handleDownloadPDF}
                            >
                                Download PDF
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-emerald-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                                onClick={this.handleSendClickSave}
                            >
                                Payment Save
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>

                    <div id="pdf-content">
                        {data.map((product: any) => (
                            <ProductAccept key={product.id} data={product}/>
                        ))}
                    </div>

                </div>


            </>
        );

    }


    handleSendClickSave = async () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();

        const { data, totalPayment } = this.state;

        if (data.length > 0) {
            try {
                // Use Promise.all to wait for all save requests to complete
                // @ts-ignore
                await Promise.all(data.map(async (product) => {
                    await this.api.post("/payment/save", {
                        id: product.id,
                        customerEmail: product.customerEmail,
                        totalPayment,
                        customerName: product.customerName,
                        customerContact: product.customerContact,
                        customerAddress: product.customerAddress,
                        productName: product.productName,
                        price: product.price,
                        customerPaymentDate: formattedDate,
                        bookingDateTime: product.bookingDateTime
                    });
                }));

                toast.success("All payments saved successfully. Happy Journey");
            } catch (err) {
                console.error(err);
                toast.error("Error saving payments");
            }
        } else {
            toast.error("No data to save. Fetch data first.");
        }
    };
}