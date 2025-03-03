import express, { Request, Response } from "express";
import morgan from "morgan";
import { getPosts } from "./cms";
import cors from "cors";
import { postRouter } from "./routes/post";
import { homeRouter } from "./routes/home";

const app = express();
const PORT = 5005;

app.use(express.json());
const corsOptions = {
  origin: "https://localhost:5173",
};

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.use("/", homeRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
