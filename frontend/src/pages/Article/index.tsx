import { ChevronRight, Loader } from "lucide-react";
import GooleMapImage from "@/assets/GoogleMapTA.png";
import LeftIcon from "@/assets/leftIcon.png";

import { Link, useParams } from "react-router-dom";

import { format } from "date-fns";
import PortableTextComponent from "./PortableComponents";
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/components/common/SocialLinks";
import { PostType } from "@/type";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";

export const Article = () => {
  const { id: articleId } = useParams();

  const { data: post, loading } = useFetch<PostType | null>(
    `posts/${articleId}`
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const subHeadings =
    post &&
    post.body.reduce((acc: string[], chunkBody) => {
      if (
        (chunkBody.style === "h2" || chunkBody.style === "h3") &&
        chunkBody.children?.[0]?.text
      ) {
        acc.push(chunkBody.children[0].text);
      }
      return acc;
    }, []);
  useEffect(() => {
    const contentDiv = document.getElementById("content-container");
    if (!contentDiv || subHeadings?.length === 0) return;

    const headings = contentDiv.querySelectorAll("h2, h3");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            const index = subHeadings?.findIndex((heading) => {
              const slug = heading
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "");
              return slug === id;
            });
            if (index !== -1) setActiveIndex(index!);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [subHeadings]);

  if (loading || !post)
    return (
      <div className=" w-full  h-[70vh] flex items-center justify-center">
        <Loader size={60} className=" animate-spin" />;
      </div>
    );

  const formattedDate = format(post?.publishedAt, "MMMM d, yyyy");

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
              {post?.title}
            </h2>
            <div className=" pt-4">
              <p>
                News /
                <span className="font-semibold"> {post?.slug.current}</span>
              </p>
            </div>
          </div>
          <div className="w-2/3 h-full flex flex-col gap-3  ">
            <img src={GooleMapImage} alt="google map image" />
            <div className="flex gap-3 text-black/60 flex-wrap ">
              {post?.tags.map((tag) => (
                <Button className="px-6 rounded-full " variant="outline">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col items-center justify-center xl:pt-10  ">
        <div className="px-2 w-full xl:w-11/12  h-full flex gap-4 flex-col">
          <img className="w-full h-full rounded-xl" src={post?.image}></img>
          <div className=" flex flex-col md:flex-row md:items-center justify-between gap-4 md:pr-10">
            <div className=" flex gap-8  text-black/60 w-full items-center md:pl-20">
              <p>{post?.category}</p>
              <div className=" w-[2px] h-4 bg-black/40"></div>
              <p>{formattedDate}</p>
              <div className=" w-[2px] h-4 bg-black/40"></div>
              <p>{post?.author}</p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className=" md:max-container py-10 md:py-28 flex gap-10 items-start relative w-full h-full   ">
        <div id={"content-container"} className="w-full px-4 md:w-2/3">
          <PortableTextComponent content={post?.body || []} />
        </div>
        <div className="bg-secondary p-6 rounded-2xl  mt-4 hidden md:block sticky  top-20 ">
          <div className="flex flex-col gap-6 ">
            {subHeadings &&
              subHeadings.map((heading, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const slug = heading
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]/g, "");
                    const element = document.getElementById(slug);

                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={cn(
                    "flex items-center justify-start w-full gap-2 cursor-pointer hover:text-black/80 transition-colors",
                    index === activeIndex
                      ? "font-semibold text-black/70"
                      : "text-black/40 font-medium"
                  )}
                >
                  {index === activeIndex && <ChevronRight size={16} />}
                  <p className=" text-start">{heading}</p>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
