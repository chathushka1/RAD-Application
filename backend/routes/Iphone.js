var express=require('express');
var router=express.Router();

const iPhoneController=require("../controller/IphoneController");

router.get('/all',iPhoneController.getAllProduct);

router.post('/save',iPhoneController.saveProduct);

router.put('/update/:id',iPhoneController.updateProduct);

router.delete('/delete/:id',iPhoneController.deleteProduct);

router.get('/lastId',iPhoneController.dataBaseLastIdCheck);

module.exports=router;