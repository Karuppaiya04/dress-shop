import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://img.freepik.com/premium-photo/interior-men-s-clothing-store-style-fashion_120897-3074.jpg?w=1800",
  "https://thumbs.dreamstime.com/b/women-s-clothing-store-section-mall-dresses-pants-hats-bags-shoes-69629962.jpg",
  "https://findit-resources.s3.us-east-2.amazonaws.com/forums/1630413723661.jpg",
];

function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <div className="flex justify-center items-center py-6">
              <div className="relative group transition-transform duration-700 hover:scale-105">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-300/40 via-pink-200/30 to-cyan-200/40 blur-xl opacity-80 group-hover:opacity-100 animate-gradient-bg z-0" />
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-[90vw] max-w-4xl h-[350px] object-cover rounded-3xl shadow-2xl border-4 border-transparent group-hover:border-blue-400/60 transition-all duration-700 backdrop-blur-lg bg-white/30 z-10"
                  style={{ maxHeight: "350px", minHeight: "220px" }}
                />
                <div className="absolute inset-0 rounded-3xl border-4 border-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-80 animate-pulse pointer-events-none z-20" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
