const multer= require('multer');


//form middleware
const upload=multer({dest:'uploads'});

module.exports=upload;

