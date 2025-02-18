import React, { useCallback, useEffect, useRef, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./progress";
import { cn } from "@/lib/utils";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  useEffect(() => {});

  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as React.RefObject<HTMLElement>
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img
                  className="w-full h-full object-center object-fill"
                  src={slide}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons"></div>

        <div className=" absolute z-50 bottom-12 right-10 flex gap-2 ">
          {slides.map((_, index) => (
            <div
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
