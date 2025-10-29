'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowUpRight } from 'lucide-react'; 
import 'swiper/css';


export default function DevelopersCarousel() {
  const developers = [
    {
      id: 1,
      name: 'RAMANIYAM',
      logo: '/casagrand.jpg',
      image: '/appaswamy-slide.webp'
    },
    {
      id: 2,
      name: 'DRA',
      logo: '/casagrand.jpg',
      image: '/appaswamy-slide.webp'
    },
    {
      id: 3,
      name: 'LANCOR',
      logo: '/casagrand.jpg',
      image: '/appaswamy-slide.webp'
    },
    {
      id: 3,
      name: 'LANCOR',
      logo: '/casagrand.jpg',
      image: '/appaswamy-slide.webp'
    },
    {
      id: 3,
      name: 'LANCOR',
      logo: '/casagrand.jpg',
      image: '/appaswamy-slide.webp'
    },
    {
      id: 4,
      name: 'VGN',
      logo: '/casagrand.jpg',
      image: '/appaswamy-slide.webp'
    }
  ];

  return (
    <div className="py-5 bg-light">
      <div className="p-2">
        <h2 className="text-center fw-bold text-info mb-4">In Focus Developers</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
        >
          {developers.map((developer) => (
            <SwiperSlide key={developer.id}>
              <div className="card border-1 shadow-sm h-100 p-2 position-relative overflow-hidden">
                {/* Top image */}
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="card-img-top img-fluid"
                  style={{ height: '450px',width: '500px',  objectFit: 'cover' }}
                />

                {/* Top-right logo */}
                <img
                  src={developer.logo}
                  alt={`${developer.name} logo`}
                  className="position-absolute start-0 end-0 m-3 bg-white  p-2 shadow-sm"
                  style={{ width: '100px', height: '50px', objectFit: 'contain' }}
                />

                {/* Bottom Lucide arrow icon */}
                <div className="position-absolute bottom-0 end-0 m-3">
                  <button
                    className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#dbeafe', // light blue
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0891b2')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#dbeafe')}
                  >
                    <ArrowUpRight size={20} color="#0f172a" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
