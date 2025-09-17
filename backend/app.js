import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser"
import userRoutes from "./src/routes/user.routes.js";
import projectRoutes from"./src/routes/project.routes.js";
import aiRoutes from "./src/routes/ai.routes.js"
import cors from "cors"
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
  });
  
app.use("/users", userRoutes);
app.use("/projects",projectRoutes)
app.use("/ai", aiRoutes)
export default app;