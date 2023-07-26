

const File=require('../models/file.js')
module.exports= downloadImage=async(req,res)=>{
    try{
       
        const file=await File.findById(req.params.fileId);

        console.log(file);
        file.downloadContent++;
        await file.save();

        //download
        res.download(file.path,file.name);
    }
    catch(error)
    {
        console.error(error.message);
        return res.status(500).json({error:error.message});
    }
}