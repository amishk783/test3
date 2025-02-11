import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;
console.log("🚀 ~ PORT:", PORT);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
