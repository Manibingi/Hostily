"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const galleryData = {
  galleryImage: [
    { image: "/img/features/gallery-1.jpg" },
    { image: "/img/features/gallery-2.jpg" },
    { image: "/img/features/gallery-3.jpg" },
    { image: "/img/features/gallery-4.jpg" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  const GalleryCard = ({ item, isCarousel = false }) => (
    <div
      className={`gallery__area-item ${
        isCarousel ? "carousel-gallery-card" : ""
      }`}
    >
      <img className="w-100" src={item.image} alt="image" />
    </div>
  );

  return (
    <>
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-8">
          {/* Desktop View - Original Grid Layout */}
          <div className="row d-none d-lg-flex">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 sm-mb-10">
                <GalleryCard item={item} />
              </div>
            ))}
          </div>

          {/* Medium and Small Devices - Swiper Carousel */}
          <div className="d-lg-none">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".gallery-swiper-pagination",
                type: "bullets",
                dynamicBullets: false,
              }}
              loop={false}
              className="gallery-swiper"
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {galleryImage.map((item, index) => (
                <SwiperSlide key={index}>
                  <GalleryCard item={item} isCarousel={true} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="gallery-swiper-pagination mt-4 text-center"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .gallery-swiper {
          // padding-bottom: 50px;
        }

        .gallery-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .gallery-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .gallery-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }

        /* Ensure consistent styling in carousel */
        .carousel-gallery-card {
          margin-bottom: 0;
        }

        .carousel-gallery-card img {
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .carousel-gallery-card:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 991.98px) {
          .gallery__area .container-fluid {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 575.98px) {
          .gallery-swiper .swiper-slide {
            width: 100% !important;
          }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
          .gallery-swiper .swiper-slide {
            width: calc(50% - 7.5px) !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .gallery-swiper .swiper-slide {
            width: calc(50% - 13.33px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
