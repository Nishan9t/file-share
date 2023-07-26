const File=require('../models/file.js')

module.exports= uploadImage=async(req,res)=>{
    // to save values in database
    console.log(req)
    const fileObj={
        path:req.file.path,
        name:req.file.originalname
    }
    try{
        
       const file= await File.create(fileObj);
       console.log(file)
       
       res.status(200).json({path:`http://localhost:8000/file/${file._id}`});

    }
    catch(error){
        // console.log(error.message);
        res.status(500).json({error:error.message});
    }

}







