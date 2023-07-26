const express=require('express');
const uploadImage=require('../controller/image-controller.js')
const upload =require('../utils/upload.js');
const downloadImage =require('../controller/download-controller.js');

const router= express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);

module.exports=router