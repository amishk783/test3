import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./components/carousel/EmblaCarousel";
import "@/components/carousel/embla.css";
import { articles, categories } from "./constant";
import { Button } from "./components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import { ArticleCard } from "./components/article/ArticleCard";
import { SubscriptionPopUp } from "./components/SubscriptionPopUp";
function App() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    "./src/assets/carousel/slide1.png",
    "./src/assets/carousel/slide_2.png",
    "./src/assets/carousel/slide_2.png",
  ];
  return (
    <div className="w-full font-manrope py-2 md:px-10 lg:px-20">
      {/* hero-section */}
      <div className="w-full justify-between px-4 flex flex-col lg:flex-row pb-10 sm:py-12 lg:items-center gap-4 lg:gap-16 ">
        <div className="flex flex-col md:gap-1 lg:w-1/2 ">
          <p className=" font-bold text-sm">Latest Transit News</p>
          <h2 className="font-bold text-4xl md:text-7xl">Today's Headline:</h2>
          <h2 className="font-bold text-4xl md:text-7xl">Stay Informed</h2>
        </div>
        <p className=" text-base md:text-2xl text-black/70 lg:w-1/2 ">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories.
        </p>
      </div>
      {/* carousel */}
      <div className="w-full h-full px-4 relative">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      {/* news hub */}
      <div className="w-full h-full bg-secondary px-4 md:px-20 py-28 my-10 rounded-lg">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="flex gap-2 flex-col w-full">
            <h3 className=" font-bold text-4xl md:text-5xl">
              Welcome to Our News Hub
            </h3>
            <div className="flex gap-3 py-3 lg:w-[40%] flex-wrap">
              {categories.map((category, index) => (
                <Button
                  variant={index === 0 ? "primary" : "outline"}
                  className=" rounded-full md:px-8"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <Button
            className=" self-end rounded-full px-8 gap-2"
            variant="outline"
          >
            Sort By
            <FaChevronDown />
          </Button>
        </div>
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3 w-full py-14 gap-4 md:gap-10 ">
          {articles.map((article, index) => (
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
      <div className="w-full h-full py-10 lg:px-20 md:py-40 md:my-10 rounded-lg">
        <div className="flex flex-col gap-10 md:gap-20 w-full items-center justify-center">
          <h4 className="text-4xl md:text-5xl font-bold">Popular News</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 py-5 w-full  lg:w-5/6 gap-5 md:h-[700px] ">
            <div className="col-span-1 md:row-span-3 w-full">
              <img
                className="  md:w-full object-cover"
                src="/src/assets/news/news_1.png"
              />
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex text-sm gap-10 md:gap-14">
                  <p>Real Developments</p>
                  <p>October 10,2023</p>
                  <p>Jane Smith</p>
                </div>
                <h4 className=" text-lg md:text-3xl font-semibold">
                  New Metro Line Expands City’s Transit Network
                </h4>
              </div>
            </div>
            <div className="col-span-1 md:row-span-3  grid grid-cols-1 md:grid-rows-3 gap-4  md:gap-8 ">
              <div className="flex flex-col md:flex-row gap-6 md:row-span-1">
                <img
                  src="/src/assets/news/news_2.png"
                  className=" w-full  md:w-[110px] md:h-[110px]  lg:w-[220px] lg:h-[220px] object-cover"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-col lg:gap-2">
                    <h4 className="text-lg lg:text-2xl font-semibold">
                      Bus Lanes vs. Bike Lanes: Which One Does Your City Need?
                    </h4>
                    <p className="md:text-sm lg:text-base ">
                      As cities grow, space becomes limited. What’s the right
                      approach to urban mobility?
                    </p>
                  </div>
                  <div className="">
                    <Button variant="outline" className=" rounded-full">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:row-span-1">
                <img
                  src="/src/assets/news/news_3.png"
                  className=" w-full md:w-[110px] md:h-[110px]  lg:w-[220px] object-cover"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-col lg:gap-2">
                    <h4 className="text-lg lg:text-2xl font-semibold">
                      High-Speed Rail Project Faces Delays – What’s Next?
                    </h4>
                    <p className="md:text-sm lg:text-base ">
                      Cost overruns and political debates continue to slow the
                      nation's high-speed rail dreams.
                    </p>
                  </div>
                  <div className="">
                    <Button variant="outline" className=" rounded-full">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:row-span-1">
                <img
                  src="/src/assets/news/news_4.png"
                  className=" w-full md:w-[110px] md:h-[110px]  lg:w-[220px] lg:h-[220px]  object-cover"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-col lg:gap-2">
                    <h4 className="text-lg lg:text-2xl font-semibold">
                      How Electric Buses Are Reducing City Emissions
                    </h4>
                    <p className="md:text-sm lg:text-base ">
                      Transit agencies are adopting electric fleets—what does
                      this mean for the environment?
                    </p>
                  </div>
                  <div className="">
                    <Button variant="outline" className=" rounded-full">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
