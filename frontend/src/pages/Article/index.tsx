import { ChevronRight, Loader } from "lucide-react";
import GooleMapImage from "@/assets/GoogleMapTA.png";
import LeftIcon from "@/assets/leftIcon.png";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import PortableTextComponent from "./PortableComponents";
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/components/common/SocialLinks";
import { PostType } from "@/type";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
export const Article = () => {
  const { id: articleId } = useParams();

  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await api.get(`posts/${articleId}`);

      const data: PostType = res.data[0];
      console.log("🚀 ~ fetchPosts ~ data:", data);

      setPost(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, [articleId]);

  const subHeadings =
    post &&
    post?.body.reduce((acc: string[], chunkBody) => {
      if (
        (chunkBody.style === "h2" || chunkBody.style === "h3") &&
        chunkBody.children?.[0]?.text
      ) {
        acc.push(chunkBody.children[0].text);
      }
      return acc;
    }, []);

  const formattedDate = format("2024-02-01T08:13:00.000Z", "MMMM d, yyyy");

  if (isLoading)
    return (
      <div className=" w-full  h-[70vh] flex items-center justify-center">
        <Loader size={60} className=" animate-spin" />;
      </div>
    );
  if (!post) return;
  return (
    <div className="w-full h-full ">
      <div className=" lg:max-container  flex flex-col gap-10 pb-10 px-2">
        <div className="flex items-center gap-2">
          <Link to="/" className=" rounded-full">
            <img src={LeftIcon} />
          </Link>
          <p className="text-lg font-bold">All Posts</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 lg:gap-10 xl:gap-40 ">
          <div className="3xl:w-1/2">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">
              {post.title}
            </h2>
            <div className=" pt-4">
              <p>
                News /
                <span className="font-semibold"> {post.slug.current}</span>
              </p>
            </div>
          </div>
          <div className="w-2/3 h-full flex flex-col gap-3  ">
            <img src={GooleMapImage} alt="google map image" />
            <div className="flex gap-3 text-black/60 flex-wrap ">
              <Button className="px-6 rounded-full " variant="outline">
                Metro news
              </Button>
              <Button className="px-6 rounded-full " variant="outline">
                Infrastructure
              </Button>
              <Button className="px-6 rounded-full " variant="outline">
                Bus Updates
              </Button>
              <Button className="px-6 rounded-full " variant="outline">
                5 min read
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col items-center justify-center xl:pt-10  ">
        <div className="px-2 w-full xl:w-11/12  h-full flex gap-4 flex-col">
          <img className="w-full h-full rounded-xl" src={post.image}></img>
          <div className=" flex flex-col md:flex-row md:items-center justify-between gap-4 md:pr-10">
            <div className=" flex gap-8  text-black/60 w-full items-center md:pl-20">
              <p>{post.category}</p>
              <div className=" w-[2px] h-4 bg-black/40"></div>
              <p>{formattedDate}</p>
              <div className=" w-[2px] h-4 bg-black/40"></div>
              <p>{post.author}</p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className=" md:max-container py-10 md:py-28 flex gap-10 items-start relative w-full h-full   ">
        <div className="w-full px-4 md:w-2/3">
          <PortableTextComponent content={post.body} />
        </div>
        <div className="bg-secondary p-6 rounded-2xl  mt-4 hidden md:block sticky  top-20 ">
          <div className="flex flex-col gap-6 ">
            {subHeadings &&
              subHeadings.map((heading, index) => (
                <p
                  key={index}
                  className={cn(
                    "flex items-center gap-2 ",
                    index === 0 ? "font-semibold" : "text-black/40 font-medium"
                  )}
                >
                  {index === 0 && (
                    <span>
                      <ChevronRight size={16} />
                    </span>
                  )}{" "}
                  {heading}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
