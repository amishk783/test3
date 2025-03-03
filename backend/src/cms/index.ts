import { client } from "../sanity/index";
import { Response, Request } from "express";

export const getPosts = async (req: Request, res: Response) => {
  const posts = await client.fetch('*[_type == "post"]');
  console.log("🚀 ~ getPosts ~ posts:", posts);
  res.status(200).json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const post =
    await client.fetch(`*[_type == "post" && _id=="${id}"]{title,author,body,publishedAt,slug, "category": category->
    title,"image": image.asset->url
  
}`);

  res.status(200).json(post);
};

export const getCarousel = async (req: Request, res: Response) => {
  const carousels = await client.fetch(
    `*[_type == "carousel"]{title,subTitles,"image": image.asset->url}`
  );

  res.status(200).json(carousels);
};
export const getHomePage = async (req: Request, res: Response) => {
  const page = await client.fetch(`*[_type == "homePage"][0]{
        hero{
          title,
          "imageUrl": image.asset->url,
          subHeading,
          paragraph
        },
        carousel[]{
          title,
          "imageUrl": image.asset->url,
          subTitles
        },
        "articleList": *[_type == "post"] | order(_createdAt desc)[0...6] {
          title,
          "date": publishedAt,
          "author": author,
          "description": description,
          "imageUrl": image.asset->url,
          "categoryId":category->_id
        },
        "categories":*[_type == "category"]{_id,title},
        popularSection{
        spotLightPopular{
            title,
            "imageUrl": image.asset->url,
            subTitles,
        },
         listItems[]{
      title,
      description,
      "imageUrl": image.asset->url,
      newsLink
      }
    }
  }`);

  console.log("🚀 ~ getHomePage ~ page:", page);
  res.status(200).json(page);
};
