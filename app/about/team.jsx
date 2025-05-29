"use client";
import teams from "@/components/data/team";
import Image from "next/image";
import Social from "../socials/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  const teamItem = teams.slice(0, 3);

  const TeamCard = ({ data, isCarousel = false }) => (
    <div
      className={`team__area-item ${isCarousel ? "carousel-team-card" : ""}`}
    >
      <div className="team__area-item-image">
        <Image alt="" src={data.img} />
        <div className="team__area-item-image-overlay">
          <div className="team__area-item-image-overlay-social">
            <Social />
          </div>
          <div className="team__area-item-image-overlay-content">
            <h5>{data.name}</h5>
            <span>{data.status}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="team__area section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="team__area-title">
              <span className="subtitle__one">Our Expert Member</span>
              <h2>Expert Our Services man</h2>
            </div>
          </div>
        </div>

        {/* Desktop View - Original Grid Layout */}
        <div className="row d-none d-lg-flex">
          {teamItem?.map((data, id) => (
            <div className="col-xl-4 col-lg-4 col-md-6 mt-30" key={id}>
              <TeamCard data={data} />
            </div>
          ))}
        </div>

        {/* Medium and Small Devices - Swiper Carousel */}
        <div className="d-lg-none mt-30">
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
              el: ".team-swiper-pagination",
              dynamicBullets: false,
            }}
            loop={true}
            loopedSlides={teamItem.length}
            className="team-swiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {teamItem?.map((data, id) => (
              <SwiperSlide key={id}>
                <TeamCard data={data} isCarousel={true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="team-swiper-pagination mt-4 text-center"></div>
        </div>
      </div>

      <style jsx global>{`
        .team-swiper {
          // padding-bottom: 50px;
        }

        .team-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .team-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .team-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }

        /* Ensure consistent styling in carousel */
        .carousel-team-card {
          margin-bottom: 0;
        }

        /* Ensure social icons and overlay content are always visible in carousel */
        .carousel-team-card .team__area-item-image-overlay {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .carousel-team-card .team__area-item-image-overlay-social,
        .carousel-team-card .team__area-item-image-overlay-content {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .carousel-team-card .team__area-item-image-overlay-social a {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 991.98px) {
          .carousel-team-card {
            margin-bottom: 0;
          }
        }

        @media (max-width: 767.98px) {
          .team-swiper .swiper-slide {
            width: 100% !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .team-swiper .swiper-slide {
            width: calc(50% - 10px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
