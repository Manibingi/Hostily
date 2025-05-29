"use client";

import teams from "@/components/data/team";
import Image from "next/image";
import Social from "../socials/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Servicesteam = () => {
  const TeamCard = ({ item, isCarousel = false }) => (
    <div
      className={`services__team-item ${
        isCarousel ? "carousel-services-team-card" : ""
      }`}
    >
      <div className="services__team-item-image">
        <Image alt="" layout="responsive" src={item.img} />
        <div className="services__team-item-image-content">
          <h5>{item.name}</h5>
          <span>{item.status}</span>
          <div className="services__team-item-image-content-social">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="services__team section-padding">
        <div className="container">
          {/* Desktop View - Original Grid Layout */}
          <div className="row d-none d-lg-flex">
            {teams.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <TeamCard item={item} />
              </div>
            ))}
          </div>

          {/* Medium and Small Devices - Swiper Carousel */}
          <div className="d-lg-none">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".services-team-swiper-pagination",
                // dynamicBullets: true,
              }}
              loop={false}
              className="services-team-swiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {teams.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="mb-30">
                    <TeamCard item={item} isCarousel={true} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="services-team-swiper-pagination mt-4 text-center"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-team-swiper {
          // padding-bottom: 50px;
        }

        .services-team-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .services-team-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .services-team-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }

        /* Dynamic bullets styling */
        // .services-team-swiper-pagination .swiper-pagination-bullet-active-main {
        //   background: #b89146;
        //   opacity: 1;
        // }

        // .services-team-swiper-pagination .swiper-pagination-bullet-active-prev,
        // .services-team-swiper-pagination .swiper-pagination-bullet-active-next {
        //   background: #b89146;
        //   opacity: 0.7;
        //   transform: scale(0.8);
        // }

        // .services-team-swiper-pagination
        //   .swiper-pagination-bullet-active-prev-prev,
        // .services-team-swiper-pagination
        //   .swiper-pagination-bullet-active-next-next {
        //   background: #b89146;
        //   opacity: 0.4;
        //   transform: scale(0.6);
        // }

        /* Ensure consistent styling in carousel */
        .carousel-services-team-card {
          margin-bottom: 0;
        }

        /* Ensure content is always visible in carousel */
        .carousel-services-team-card .services__team-item-image-content {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .carousel-services-team-card .services__team-item-image-content-social {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .carousel-services-team-card
          .services__team-item-image-content-social
          a {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 991.98px) {
          .carousel-services-team-card {
            margin-bottom: 0;
          }
        }

        @media (max-width: 767.98px) {
          .services-team-swiper .swiper-slide {
            width: 100% !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .services-team-swiper .swiper-slide {
            width: calc(50% - 10px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Servicesteam;
