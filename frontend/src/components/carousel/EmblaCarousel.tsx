import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";

type PropType = {
  slides: { imageSrc: string; subtitles: string[] }[];
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
            <div key={`${index + slide.imageSrc}`} className="embla__slide  ">
              <div className="embla__slide__number">
                <img className="w-full h-full " src={slide.imageSrc} />
              </div>
              <div className=" absolute bottom-8 flex gap-12 left-14">
                {slide.subtitles.map((subtitle, index) => (
                  <div
                    key={index + subtitle}
                    className="flex items-center gap-8 text-white/70"
                  >
                    <p>{subtitle}</p>
                    {index !== slidesLength - 1 && (
                      <div className="w-[1px] h-4 bg-white"></div>
                    )}
                  </div>
                ))}
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
