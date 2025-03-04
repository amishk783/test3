import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./components/carousel/EmblaCarousel";
import "@/components/carousel/embla.css";

import { Button } from "./components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import { ArticleCard } from "./components/article/ArticleCard";

import { useFetch } from "./hooks/useFetch";
import { ArticleList, HomePageType } from "./type";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  const { data, loading } = useFetch<HomePageType>("/pages/home");

  const [activeCategory, setActiveCategory] = useState("0");

  const [articles, setArticles] = useState<ArticleList[] | null>(
    data?.articleList || null
  );

  useEffect(() => {
    if (data?.articleList) {
      setArticles(data.articleList);
    }
  }, [data]);

  const handleCategoryClick = (_id: string) => {
    if (!data) return;

    if (_id === "0") {
      setActiveCategory(_id);
      setArticles(data.articleList);
      return;
    }

    setActiveCategory(_id);

    const filteredArticles = data.articleList.filter(
      (article) => article.categoryId === _id
    );

    setArticles(filteredArticles);
  };

  if (loading)
    return (
      <div className=" w-full  h-[70vh] flex items-center justify-center">
        <Loader size={60} className=" animate-spin" />;
      </div>
    );

  return (
    <div className="w-full font-manrope py-2 md:px-10 lg:px-20">
      {/* hero-section */}

      {data && (
        <div className="w-full justify-between px-4 flex flex-col lg:flex-row pb-10 sm:py-12 lg:items-center gap-4 lg:gap-16 ">
          <div className="flex flex-col md:gap-1 lg:w-[40%] ">
            <p className=" font-bold text-sm">{data?.hero.subHeading}</p>
            <h2 className="font-bold text-4xl md:text-7xl leading-[4rem]">
              {data?.hero.title}
            </h2>
          </div>
          <p className=" text-base md:text-2xl text-black/70 lg:w-1/2 ">
            {data?.hero.paragraph}
          </p>
        </div>
      )}
      {/* carousel */}
      <div className="w-full h-full px-2 md:px-10 relative">
        {data?.carousel && (
          <EmblaCarousel slides={data.carousel} options={OPTIONS} />
        )}
      </div>
      {/* news hub */}
      <div className="w-full h-full bg-secondary px-4 md:px-20 py-28 my-10 rounded-lg">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="flex gap-2 flex-col w-full">
            <h3 className=" font-bold text-4xl md:text-5xl">
              Welcome to Our News Hub
            </h3>
            <div className="flex gap-3 py-3 2xl:w-[40%] flex-wrap">
              <Button
                onClick={() => handleCategoryClick("0")}
                variant={activeCategory === "0" ? "primary" : "outline"}
                className="rounded-full md:px-8 font-medium "
              >
                View all
              </Button>
              {data &&
                data?.categories.map((category, index) => (
                  <Button
                    onClick={() => handleCategoryClick(category._id)}
                    key={index}
                    variant={
                      activeCategory === category._id ? "primary" : "outline"
                    }
                    className={`rounded-full md:px-8 font-medium ${
                      activeCategory === category._id ? "   " : "text-black/60"
                    }`}
                  >
                    {category.title}
                  </Button>
                ))}
            </div>
          </div>
          <Button
            className=" self-end lg:self-center rounded-full px-8 gap-2  font-medium  text-black/60"
            variant="outline"
          >
            Sort By
            <FaChevronDown />
          </Button>
        </div>
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3 w-full py-14 gap-4 md:gap-10 ">
          {articles?.length === 0 && (
            <p className=" text-xl text-center py-5 ">
              No article found for this category.
            </p>
          )}
          {articles &&
            articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
        </div>
        <div className="flex items-center w-full justify-center">
          <Button className=" rounded-full px-8 " variant="primary">
            Load More
          </Button>
        </div>
      </div>
      {/* popular news */}
      <div className="w-full h-full py-10 2xl:px-20 md:py-40 md:my-10 rounded-lg max-sm:px-4">
        <div className="flex flex-col gap-10 md:gap-20 w-full items-center justify-center">
          <h4 className="text-4xl md:text-5xl font-bold">
            {data?.popularSection.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 py-5 w-full  2xl:w-5/6 gap-5 md:h-[700px] ">
            <div className="col-span-1 md:row-span-3 w-full">
              <img
                className="  md:w-full object-cover"
                src={data?.popularSection.spotLightPopular.imageUrl}
              />
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex text-sm gap-10 md:gap-14">
                  {data?.popularSection.spotLightPopular.subTitles.map(
                    (subtitle) => (
                      <p>{subtitle}</p>
                    )
                  )}
                </div>
                <h4 className=" text-lg md:text-3xl font-semibold">
                  {data?.popularSection.spotLightPopular.title}
                </h4>
              </div>
            </div>
            <div className="col-span-1 md:row-span-3  grid grid-cols-1 md:grid-rows-3 gap-4  md:gap-8 ">
              {data?.popularSection.listItems.map((listItem) => (
                <div className="flex flex-col md:flex-row gap-6 md:row-span-1">
                  <img
                    src={listItem.imageUrl}
                    className=" w-full  md:w-[110px] md:h-[110px]  lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="flex flex-col gap-2 justify-between">
                    <div className="flex flex-col lg:gap-2">
                      <h4 className="text-lg lg:text-2xl font-semibold">
                        {listItem.title}
                      </h4>
                      <p className="md:text-sm lg:text-base ">
                        {listItem.description}
                      </p>
                    </div>
                    <div className="">
                      <Button variant="outline" className=" rounded-full">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
