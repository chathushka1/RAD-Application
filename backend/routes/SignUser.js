var express=require('express');
var router=express.Router();
const signController=require('../controller/SignController');

router.post('/save',signController.saveUser);
router.post('/oneUser',signController.getUserLogin);

module.exports = router;

