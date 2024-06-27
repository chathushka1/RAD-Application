var express = require('express');
var router = express.Router();

const byProductController=require("../controller/ByProductController");

router.post('/byTheProduct',byProductController.customerByTheProduct);

router.get('/getAllCustomerProduct',byProductController.getAllCustomerProduct);

router.put('/updateCustomerProduct/:id',byProductController.updateCustomerProduct);

router.get('/userCount',byProductController.userCount);

router.get('/booking/:customerEmail',byProductController.onlyBookedCustomerEmail);

router.get('/payment/:customerEmail',byProductController.onlyPaymentCustomerEmail);

router.delete('/delete/:id',byProductController.deleteRequest);


module.exports = router;