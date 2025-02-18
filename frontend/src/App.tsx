import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./components/carousel/EmblaCarousel";
import "@/components/carousel/embla.css";
import { articles, categories } from "./constant";
import { Button } from "./components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import { ArticleCard } from "./components/article/ArticleCard";
function App() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    "./src/assets/carousel/slide1.png",
    "./src/assets/carousel/slide_2.png",
    "./src/assets/carousel/slide_2.png",
  ];
  return (
    <div className="w-full font-manrope py-2 px-20">
      {/* hero-section */}
      <div className="w-full   justify-between  flex py-12 items-center gap-16 ">
        <div className="flex flex-col gap-1 w-1/2 ">
          <p className=" font-bold text-base">Latest Transit News</p>
          <h2 className="font-bold text-7xl">Today's Headline:</h2>
          <h2 className="font-bold text-7xl">Stay Informed</h2>
        </div>
        <p className=" text-2xl text-black/70 w-1/2 ">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories.
        </p>
      </div>
      {/* carousel */}
      <div className="w-full h-full relative">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      {/* news hub */}

      <div className="w-full h-full bg-secondary px-20 py-28 my-10 rounded-lg">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 flex-col w-full">
            <h3 className=" font-bold text-5xl">Welcome to Our News Hub</h3>
            <div className="flex gap-3 py-3 w-[40%] flex-wrap">
              {categories.map((category, index) => (
                <Button
                  variant={index === 0 ? "primary" : "outline"}
                  className=" rounded-full px-8"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <Button className=" rounded-full px-8 gap-2" variant="outline">
            Sort By
            <FaChevronDown />
          </Button>
        </div>
        <div className=" grid grid-cols-3 w-full py-14 gap-10 ">
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
      <div className="w-full h-full px-20 py-40 my-10 rounded-lg">
        <div className="flex flex-col gap-20 w-full items-center justify-center">
          <h4 className="text-5xl font-bold">Popular News</h4>
          <div className="grid grid-cols-2 grid-rows-3 py-5 w-5/6 gap-5 h-[700px] ">
            <div className="col-span-1 row-span-3">
              <img
                className=" w-full object-cover"
                src="/src/assets/news/news_1.png"
              />
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-14">
                  <p>Real Developments</p>
                  <p>October 10,2023</p>
                  <p>Jane Smith</p>
                </div>
                <h4 className=" text-3xl font-semibold">
                  New Metro Line Expands City’s Transit Network
                </h4>
              </div>
            </div>
            <div className="col-span-1 row-span-3 grid grid-rows-3 gap-8 ">
              <div className="flex gap-6 row-span-1">
                <img
                  src="/src/assets/news/news_2.png"
                  className=" w-[220px] h-[220px] object-cover"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <h4 className=" text-2xl font-semibold">
                      Bus Lanes vs. Bike Lanes: Which One Does Your City Need?
                    </h4>
                    <p>
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
              <div className="flex gap-6 row-span-1">
                <img
                  src="/src/assets/news/news_3.png"
                  className=" w-[220px] h-[220px] object-cover"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <h4 className=" text-2xl font-semibold">
                      High-Speed Rail Project Faces Delays – What’s Next?
                    </h4>
                    <p>
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
              <div className="flex gap-6 row-span-1">
                <img
                  src="/src/assets/news/news_4.png"
                  className=" w-[220px] h-[220px] object-cover"
                />
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <h4 className=" text-2xl font-semibold">
                      How Electric Buses Are Reducing City Emissions
                    </h4>
                    <p>
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
