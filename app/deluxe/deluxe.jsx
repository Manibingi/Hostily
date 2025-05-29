"use client";
import roomFilter from "../../components/data/room-filter";
import React, { useState } from "react";
import RoomItem from "./room-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const { projects, filters } = roomFilter;

const getFilteredProjects = (filterData) =>
  filterData === "filter-item"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

const Deluxe = () => {
  // Item Filter
  const [filter, setFilter] = useState("filter-item");
  const filteredProjects = getFilteredProjects(filter);

  // Item Active Hover
  const [active, setActive] = useState(1);
  const handelActive = (index) => {
    setActive(index);
  };

  const RoomCard = ({ project, index, isCarousel = false }) => (
    <div
      className={`deluxe__area-item ${
        active === index ? "deluxe__area-item-hover" : ""
      } ${project.filter.join(" ")} ${isCarousel ? "carousel-room-card" : ""}`}
      onMouseEnter={() => handelActive(index)}
    >
      <RoomItem project={project} />
    </div>
  );

  return (
    <>
      <div className="deluxe__area section-padding">
        <div className="container">
          <div className="row align-items-end mb-30">
            <div className="col-xl-5">
              <div className="deluxe__area-title">
                <span className="subtitle__one">Deluxe and Luxury</span>
                <h2>Our Luxury Rooms</h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="deluxe__area-btn">
                <ul>
                  {filters.map(({ id, name, filterData }) => (
                    <li
                      key={id}
                      onClick={() => setFilter(filterData)}
                      className={filter === filterData ? "active" : ""}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop View - Original Grid Layout with Filters */}
          <div className="row d-none d-lg-flex">
            {filteredProjects.map((project, index) => (
              <div
                className={project.class_s}
                key={project.id}
                onMouseEnter={() => handelActive(index)}
              >
                <RoomCard project={project} index={index} />
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
                el: ".deluxe-swiper-pagination",
              }}
              loop={true}
              className="deluxe-swiper"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <RoomCard project={project} index={index} isCarousel={true} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="deluxe-swiper-pagination mt-4 text-center"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .deluxe-swiper {
          // padding-bottom: 50px;
        }

        .deluxe-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .deluxe-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .deluxe-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }

        /* Ensure consistent styling in carousel */
        .carousel-room-card {
          margin-bottom: 0;
        }

        /* Ensure all interactive elements are visible in carousel */
        .carousel-room-card .deluxe__area-item-content-btn,
        .carousel-room-card .simple-btn,
        .carousel-room-card .theme-btn,
        .carousel-room-card .theme-border-btn {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .carousel-room-card .deluxe__area-item-content-btn a,
        .carousel-room-card .simple-btn a,
        .carousel-room-card .theme-btn a,
        .carousel-room-card .theme-border-btn a {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 991.98px) {
          .deluxe__area-btn {
            margin-bottom: 20px;
          }

          .deluxe__area-btn ul {
            justify-content: center;
            flex-wrap: wrap;
          }

          .deluxe__area-btn ul li {
            margin: 5px;
            font-size: 14px;
          }

          .carousel-room-card {
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Deluxe;
