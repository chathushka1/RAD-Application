var express=require('express');
var router=express.Router();

const productController=require("../controller/IpadController");

router.get('/all',productController.getAllProduct);

router.post('/save',productController.saveProduct);

router.put('/update/:id',productController.updateProduct);

router.delete('/delete/:id',productController.deleteProduct);

router.get('/lastId',productController.dataBaseLastIdCheck);

module.exports=router;