import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import { CarouselType } from "@/type";

type PropType = {
  slides: CarouselType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  useEffect(() => {});

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const slidesLength = slides.length;
  return (
    <div className="embla w-full lg:w-5/6 relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              key={`${index + slide.imageUrl + slide.title}`}
              className="embla__slide  "
            >
              <div className="embla__slide__number">
                <img className="w-full h-full " src={slide.imageUrl} />
              </div>

              <div className="absolute  bottom-8 flex flex-col gap-4 left-14">
                <h2 className="text-6xl w-[60%] text-wrap font-bold text-white">
                  {slide.title}
                </h2>
                <div className=" flex gap-12">
                  {slide.subTitles.map((subtitle, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-8 text-white/70"
                    >
                      <p>{subtitle}</p>
                      {index !== slidesLength  && (
                        <div className="w-[1px] h-4 bg-white"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons"></div>

        <div className=" absolute z-40 bottom-12 right-10 flex gap-2 ">
          {slides.map((_, index) => (
            <div
              key={index}
              className={cn(
                " relative  bg-green-600 rounded-full",
                selectedIndex === index
                  ? "bg-gradient-to-r from-[#21690F] to-[#88C848] w-6 h-2"
                  : "bg-white w-2 h-2"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
