import {Component} from "react";
import axios from "axios";

import {CustomerIphones} from "../../common/CustomerProduct/CustomerIphones";

export class CustomerIphone extends Component {

    private api:any;

    constructor(props:{} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData= async () =>{
        try {
            this.api.get('/iPhone/all').then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any) =>{
                console.log("Axios Error",error);
            });
        }catch (error){
            console.log("Data NOT Loard",error);
        }
    }

    render() {

        // @ts-ignore
        const {data}=this.state;

        return (
            <>
                <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
                    <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-blue-950">
                        <h2>Ways to save. Find what works for you</h2>
                    </div>
                    <section
                        className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">

                        {
                            data.map((iPhone:any)=>(
                                <CustomerIphones key={iPhone.id} data={iPhone}/>
                            ))
                        }
                    </section>
                </section>
            </>
        );
    }
}