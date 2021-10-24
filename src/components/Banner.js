import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://cutt.ly/8RTOtnZ" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://cutt.ly/MRYHqSI" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://cutt.ly/MRTI5mH" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://cutt.ly/xRYHjur" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
