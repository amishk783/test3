import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import GooleMapImage from "@/assets/GoogleMapTA.png";
import Hero from "@/assets/carousel/slide1.png";



export const Article = () => {
  return (
    <div className="w-full h-full">
      <div className=" max-container flex flex-col gap-10 pb-10">
        <div className="flex items-center gap-2">
          <Button className=" w-10 h-10 rounded-full">
            <ChevronLeft />
          </Button>
          <p className="text-lg font-bold">All Posts</p>
        </div>

        <div className="flex items-center gap-40 ">
          <div className="w-1/2">
            <h2 className=" text-5xl ">
              The Future of Urban Transit: How Cities Are Evolving to Meet
              Modern Needs
            </h2>
            <div className="">
              <p>
                News/<span className="font-semibold">Metro News</span>
              </p>
            </div>
          </div>
          <div className="">
            <img src={GooleMapImage} alt="google map image" />
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col items-center justify-center ">
        <div className="w-5/6 h-full flex gap-4 flex-col">
          <img className="w-full h-full" src={Hero}></img>
          <div className=" flex gap-8 text-black/70 w-full items-center pl-20">
            <p>Metro News</p>
            <div className=" w-[1px] h-4 bg-black"></div>
            <p>October 10,2023</p>
            <div className=" w-[1px] h-4 bg-black"></div>
            <p>Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
};
