
import { client } from "../sanity/index";
import { Response, Request } from "express";


export const getArticles = async (req: Request, res: Response) => {
  const posts = await client.fetch('*[_type == "post"]');
  console.log("🚀 ~ getPosts ~ posts:", posts);
  res.status(200).json(posts);
};

export const getArticle = async (req: Request, res: Response) => {
  const { id } = req.params;

  const post =
    await client.fetch(`*[_type == "post" && _id=="${id}"]{title,author,body,publishedAt,slug, "category": category->
    title,"image": image.asset->url
  
}`);

  res.status(200).json(post);
};
