import express, { Request, Response } from "express";
import { getPosts } from "./cms/post";
import { postRouter } from "./routes/post";
const app = express();
const PORT = 5005;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.get("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
