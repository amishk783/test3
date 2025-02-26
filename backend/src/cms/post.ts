import { client } from "../sanity/index";
import { Response, Request } from "express";






export const getPosts = async (req: Request, res: Response) => {
  const posts = await client.fetch('*');
  console.log("🚀 ~ getPosts ~ posts:", posts);
  res.status(200).json(posts);
};
