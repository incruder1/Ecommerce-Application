import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
<<<<<<< HEAD

=======
import path from 'path'
import {fileURLToPath} from 'url'
>>>>>>> origin/main
//configure env
dotenv.config();

//databse config
connectDB();

<<<<<<< HEAD
=======
//esmoduleFix
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
>>>>>>> origin/main
//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
<<<<<<< HEAD

=======
app.use(express.static(path.join(__dirname,'./client/build')))
>>>>>>> origin/main
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Time Zone</h1>");
});

<<<<<<< HEAD
=======
app.use("*", function(req,res){
  res.sendFile(path.join(__dirname,".client/build/index.html"));
})

>>>>>>> origin/main
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
