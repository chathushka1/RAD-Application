var express=require('express');
var router=express.Router();

const iPadController=require("../controller/IpadController");

router.get('/all',iPadController.getAllProduct);

router.post('/save',iPadController.saveProduct);

router.put('/update/:id',iPadController.updateProduct);

router.delete('/delete/:id',iPadController.deleteProduct);

router.get('/lastId',iPadController.dataBaseLastIdCheck);

module.exports=router;