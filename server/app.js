// import modules
  const express= require("express");
  const mogoose=require("mongoose");
  const morgan=require("morgan");
  const cors = require("cors");
const { default: mongoose } = require("mongoose");
  require("dotenv").config();


//app
const app= express();


// db
mongoose
.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("DB CONNECTED"))
  .catch(err=>console.log("DB CONNECTION ERROR",err));

// middlerware
app.use(morgan("dev"))
app.use(cors({origin: true,credentials:true}));


//routes



//port
const port=process.env.port || 8080

//listener

const server = app.listen(port,()=> console.log(`Server is running on ${port}`));
