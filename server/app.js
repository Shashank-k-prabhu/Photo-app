// import modules
  const express= import("express");
  const mogoose=import("mongoose");
  const morgan=import("morgan");
  const cors = import("cors");
  import(".dotenv").config();


//app
const app= express();


// db


// middlerware
app.use(morgan("dev"))
app.use(cors({origin: true,credentials:true}));


//routes



//port
const port=8080;
