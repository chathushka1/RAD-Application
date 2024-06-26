var express=require('express');
var router=express.Router();

const iWatchController=require("../controller/IwatchContoller");

router.get('/all',iWatchController.getAllProduct);

router.post('/save',iWatchController.saveProduct);

router.put('/update/:id',iWatchController.updateProduct);

router.delete('/delete/:id',iWatchController.deleteProduct);

router.get('/lastId',iWatchController.dataBaseLastIdCheck);

module.exports=router;