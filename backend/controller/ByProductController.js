const ByProductModel=require('../model/ByModel');
const {models} = require("mongoose");

const ByProductController = {
    customerByTheProduct: async (req,res)=>{
        try{

            const customerProductData=req.body;
            console.log(customerProductData);
            const customerProduct=await ByProductModel.create(customerProductData);
            res.status(200).json("By Product Is Booking.Now You File Payment From");
            console.log(customerProductData);

        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    getAllCustomerProduct:async function (req,res,next) {
        try{
            const customerProductList=await ByProductModel.find();
            res.status(200).json(customerProductList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    updateCustomerProduct:async function (req,res,next) {
        try{
            const customerProductId=req.params.id;
            const customerProductData=req.body;

            const updateCustomerProduct=await ByProductModel.findOneAndUpdate({
                    id:customerProductId
                },customerProductData,
                {new:true});

            if (!updateCustomerProduct){
                res.status(404).json({
                    error:"Customer Product Not Found"
                });
            }
            res.status(200).json(updateCustomerProduct);

        }catch (error) {
            res.status(500).json({
                error:"Server Not Update Error DOWN"
            });
        }
    },

    userCount:async function (req,res,next) {
        try{
            const userCount = await ByProductModel.find(req.params.id).countDocuments();
            console.log('User Count:', userCount);
            res.status(200).json(userCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    onlyBookedCustomerEmail: async function (req, res, next) {
        try {

            const requestedCustomerEmail = req.params.customerEmail;
            const bookedOrNoBooked = await ByProductModel.find({ customerEmail: requestedCustomerEmail });



            console.log(bookedOrNoBooked);
            res.status(200).json(bookedOrNoBooked);

        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Server Error DOWN",
            });
        }
    },

    onlyPaymentCustomerEmail:async function (req,res,next) {
        try{
            const productPrices = await ByProductModel.find({ customerId: req.params.customerId });

            let totalProductPrice = 0;

            productPrices.forEach(function (product) {
                if (product.productBook === 'Buy') {
                    totalProductPrice += product.price;
                }
            });

            console.log(totalProductPrice);
            res.status(200).json({ totalProductPrice });




        }catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Server Error DOWN"
            });
        }
    },

    deleteRequest:async function (req,res,next) {
        try{
            const customerProductId=req.params.id;
            const deleteCustomerProduct=await ByProductModel.findOneAndDelete({
                id:customerProductId
            });

            if (!deleteCustomerProduct){
                res.status(404).json({
                    error:"Customer Product Not Found"
                });
            }
            res.status(200).json(deleteCustomerProduct);

        }catch (error) {
            res.status(500).json({
                error:"Server Not Delete Error DOWN"
            });
        }
    }
}

module.exports = ByProductController;