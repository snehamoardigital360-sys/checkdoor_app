"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const slidesData = [
  {
    id: 1,
    items: [
      {
        title: "Chennai",
        image: "img1.jpg",

        height: "200px",
      },
      {
        title: "Coimbatore",
        image: "img2.jpg",

        height: "200px",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        title: "Madurai",
        image: "img3.jpg",

        height: "410px",
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        title: "Bangalore",
        image: "img4.jpg",

        height: "160px",
      },
      {
        title: "Hyderabad",
        image: "img5.jpg",

        height: "120px",
      },
      {
        title: "Kochi",
        image: "img6.jpg",

        height: "120px",
      },
    ],
  },
  {
    id: 4,
    items: [
      {
        title: "Pune",
        image: "img6.jpg",

        height: "200px",
      },
      {
        title: "Delhi",
        image: "img1.jpg",

        height: "200px",
      },
    ],
  },
  {
    id: 5,
    items: [
      {
        title: "Mumbai",
        image: "img2.jpg",

        height: "410px",
      },
    ],
  },
];

export default function CategorySwiper({ slides = slidesData }) {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container-fluid px-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold text-dark"
            style={{ letterSpacing: "3px" }}
          >
            location
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[FreeMode]}
          loop={true}
          freeMode={true}
          slidesPerView={4}
          spaceBetween={20}
          className="category-swiper"
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="d-flex flex-column gap-3">
                {slide.items.map((item, index) => (
                  <div
                    key={index}
                    className="position-relative overflow-hidden"
                    style={{
                      borderRadius: "20px",
                      height: item.height,
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {/* Background Image */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Overlay Label */}
                    <div className="position-absolute bottom-0 start-0 w-100 text-center ">
                      <h3 className="font-bold text-white ">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .category-swiper {
          padding: 10px 0 30px 0;
        }
      `}</style>
    </section>
  );
}
