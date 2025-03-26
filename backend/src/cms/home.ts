import { client } from "../sanity";
import { Response, Request } from "express";

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
          _id,
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
