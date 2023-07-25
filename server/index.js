const express= require('express');
const router=require('./routes/routes.js')
const cors=require('cors')
const DBConnection=require('./database/db.js');

const app=express();

app.use(cors());
app.use('/',router);

const PORT=8000;

DBConnection();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
