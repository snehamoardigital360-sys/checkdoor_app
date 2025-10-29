"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    text: "Working with Codeship Pvt Ltd to design and develop our eCommerce website has been an absolute game-changer for our business. Their team understood our vision perfectly and delivered a user-friendly, visually stunning platform. The site’s performance and design have significantly Working with Codeship Pvt Ltd to design and develop our eCommerce website has been an absolute game-changer for our business. Their team understood our vision perfectly and delivered a user-friendly, visually stunning platform.",

    art: "/chennai.png",
  },
  {
    id: 2,
    text: "Working with Codeship Pvt Ltd to design and develop our eCommerce website has been an absolute game-changer for our business. Their team understood our vision perfectly and delivered a user-friendly, visually stunning platform. The site’s performance and design have significantly Working with Codeship Pvt Ltd to design and develop our eCommerce website has been an absolute game-changer for our business. Their team understood our vision perfectly and delivered a user-friendly, visually stunning platform. ",

    art: "/bengalore.png",
  },
];

export default function TestimonialVertical() {
  const swiperRef = useRef(null);

  return (
    <section className="py-md-5 py-2 container">
      <div className="">
        <h1 className="font-size-50 font_weight_600 text-center mb-4">
          Why Choose Our Company
        </h1>
        <div>
          <Swiper
            direction="vertical"
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="responsive-media"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="row align-items-center">
                  {/* Image Column: order-1 for mobile, order-lg-2 for larger screens */}
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 order-1 order-lg-2 mb-4 mb-lg-0">
                    <div className="d-flex justify-content-center">
                      <Image
                        src={t.art}
                        alt="Testimonial art"
                        width={500}
                        height={400}
                        style={{
                          objectFit: "cover",
                          borderRadius: 16,
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                  {/* Text Column: order-2 for mobile, order-lg-1 for larger screens */}
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 order-2 order-lg-1">
                    <div className="col-12 col-md-10 col-lg-9 mx-auto">
                      <h2>Company Highlights</h2>

                      <ul className="font-bold text-muted text-justify text-lg-start mb-4">
                        {t.text.split(". ").map(
                          (point, index) =>
                            point.trim() && (
                              <li key={index} className="mb-2">
                                {point}.
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Arrow buttons at the bottom of the section */}
          <div className="testimonial-arrows d-flex gap-3 justify-content-center align-items-end">
            <button
              className="arrow-btn d-flex align-items-center justify-content-center"
              onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            >
              <Image
                src="/left_arrow.png"
                alt="Previous"
                width={30}
                height={30}
              />
            </button>
            <button
              className="arrow-btn d-flex align-items-center justify-content-center"
              onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            >
              <Image src="/right_arrow.png" alt="Next" width={30} height={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}