"use client";
import React, { useState ,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";

export default function ExploreProject() {
  const [activeTab, setActiveTab] = useState("Trending");
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // now safe to render browser-only code
  }, []);

  if (!isClient) return null;
  const projects = [
    {
      id: 1,
      title: "5 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg4.png",
      logo: "/images/vgn-logo.png",
      badges: ["Trending", "For Sale"],
    },
    {
      id: 2,
      title: "4 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg5.png",
      logo: "/images/vgn-logo.png",
      badges: ["Trending", "For Sale"],
    },
    {
      id: 3,
      title: "4 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg6.png",
      logo: "/images/appaswamy-logo.png",
      badges: ["Trending", "For Sale"],
    },
    {
      id: 4,
      title: "3 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg7.png",
      logo: "/images/appaswamy-logo.png",
      badges: ["Trending", "For Sale"],
    },
    {
      id: 5,
      title: "3 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg8.png",
      logo: "/images/appaswamy-logo.png",
      badges: ["Trending", "For Sale"],
    },
    {
      id: 6,
      title: "3 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg8.png",
      logo: "/images/appaswamy-logo.png",
      badges: ["Pre Launch", "For Sale"],
    },
      {
      id: 7,
      title: "3 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg8.png",
      logo: "/images/appaswamy-logo.png",
      badges: ["Trending", "For Sale"],
    },
      {
      id: 8,
      title: "3 BHK Apartment for Sale in Guindy",
      location: "Premium Location",
      img: "/image/agent-bg8.png",
      logo: "/images/appaswamy-logo.png",
      badges: ["Trending", "For Sale"],
    },
  ];

  const tabs = ["Trending", "Pre Launch", "NRI", "Luxury"];
  const filteredProjects = projects.filter((p) =>
    p.badges.includes(activeTab)
  );

  return (
    <section className="py-5 px-5 text-center position-relative">
      <div className="position-relative">
        <h2 className="fw-bold mb-4">Explore new projects in Chennai</h2>
        <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn ${
                activeTab === tab
                  ? "btn-danger text-white fw-semibold"
                  : "btn-light border fw-semibold"
              } rounded-3 px-3 py-2`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="pb-4"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="card border-0 shadow-sm overflow-hidden rounded-4 position-relative">
                    <div className="position-relative">
                      <img
                        src={project.img}
                        className="card-img-top"
                        alt={project.title}
                        style={{ height: "400px", objectFit: "cover" }}
                      />
                      <img
                        src="/image/logo.jpg"
                        className="position-absolute top-0 start-0 m-2 rounded bg-white p-1"
                        style={{ width: "70px" }}
                        alt="Logo"
                      />

                      {/* Badges */}
                      <div className="position-absolute top-0 end-0 m-2 d-flex gap-2">
                        {project.badges.map((b, i) => (
                          <span
                            key={i}
                            className="badge bg-dark opacity-75 px-3 py-2 rounded-pill"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      {/* Overlay Gradient */}
                      <div
                        className="position-absolute bottom-0 start-0 w-100 text-start text-white p-3"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                        }}
                      >
                        <h6 className="fw-semibold mb-1">{project.title}</h6>
                        <div className="d-flex align-items-center gap-1 text-white-50">
                          <MapPin size={16} />
                          <small>{project.location}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-muted">No projects available under this tab.</p>
            )}
          </Swiper>
          <button
            className="custom-prev d-flex align-items-center justify-content-center border-0"
            style={{
              position: "absolute",
              top: "40%",
              left: "-30px",
              transform: "translateY(-50%)",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "#088c98",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              zIndex: 10,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <ArrowLeft size={22} color="#fff" />
          </button>
          <button
            className="custom-next d-flex align-items-center justify-content-center border-0"
            style={{
              position: "absolute",
              top: "40%",
              right: "-30px",
              transform: "translateY(-50%)",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "#088c98",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              zIndex: 10,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <ArrowRight size={22} color="#fff" />
          </button>
        </div>
      </div>
      <style jsx>{`
        .custom-prev:hover,
        .custom-next:hover {
          background-color: #dc3545;
        }
        .custom-prev:hover svg,
        .custom-next:hover svg {
          color: #fff;
        }
      `}</style>
    </section>
  );
}
