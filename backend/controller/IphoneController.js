const Product=require('../model/Iphone');


const IphoneController={
    getAllProduct:async function (req,res,next) {
        /*res.send(
            res.send(productList)
        );*/
        try{
            const productList=await Product.find();
            /*const productList = await Product.find().sort({ _id: -1 });*/
            res.status(200).json(productList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    saveProduct: async function(req,res,next){
        try {
            const productData=req.body;
            const product=await Product.create(productData);
            res.status(200).json("Success Fully Data Add");
            console.log(productData);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    updateProduct:async function (req,res,next) {
        try {
            const productId=req.params.id;
            const productData=req.body;

            const updateProduct=await Product.findOneAndUpdate({
                    id:productId
                },productData,
                {new:true});

            if (!updateProduct){
                res.status(404).json({
                    error:"Product Not Found"
                });
            }
            res.status(200).json(updateProduct);


        }catch (error) {
            res.status(500).json({
                error:"Server Not Update Error DOWN"
            });
        }
    },

    deleteProduct:async function (req,res,next) {
        try {
            const productId=req.params.id;
            const result=await Product.deleteOne({id:productId});

            if (result.deletedCount==0){
                res.status(404).json({
                    error:"Product Not Found"
                });
            }

            res.status(200).json("Success Fully Data Delete");

        }catch (error){
            res.status(500).json({
                error:"Server Not Delete Error DOWN"
            });
        }
    },

    dataBaseLastIdCheck:async function (req,res,next) {
        try {
            const lastProduct = await Product.findOne().sort({ id: -1 }).lean();
            //const lastId = lastProduct ? lastProduct.id : 0;
            const lastId = lastProduct ? lastProduct.id + 1 : 1;
            res.status(200).json({ id: lastId });
        } catch (error) {
            console.error("Error fetching last ID:", error);
            res.status(500).json({
                error: "Server Error: Unable to fetch last ID",
            });
        }
    }

}

module.exports=IphoneController;
