"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Feature() {
  const features = [
    {
      id: 1,
      subtitle: "Our Food",
      title: "Restaurant Silo",
      description:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
      image: "/img/features/feature-1.jpg",
      imageFirst: true,
    },
    {
      id: 2,
      subtitle: "Read Our Books",
      title: "The Library",
      description:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
      image: "/img/features/feature-2.jpg",
      imageFirst: false,
    },
    {
      id: 3,
      subtitle: "Fitness Equipment",
      title: "Exercise equipment",
      description:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
      image: "/img/features/feature-3.jpg",
      imageFirst: true,
    },
    {
      id: 4,
      subtitle: "Experiences",
      title: "Swimming Pool",
      description:
        "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
      image: "/img/features/feature-4.jpg",
      imageFirst: false,
    },
  ];

  const FeatureCard = ({ feature, isCarousel = false }) => (
    <div
      className={`row align-items-center ${
        feature.imageFirst ? "bg-left" : "bg-right"
      } ${isCarousel ? "carousel-feature-card" : "mb-60"} flex justify-between`}
    >
      <div
        className={`col-xl-6 col-lg-6 ${
          !feature.imageFirst && !isCarousel ? "order-last order-lg-first" : ""
        }`}
      >
        {feature.imageFirst || isCarousel ? (
          <div className="feature__area-image">
            <Image alt="" src={feature.image} width={600} height={600} />
          </div>
        ) : (
          <div className="feature__area-left">
            <div className="feature__area-left-title">
              <span className="subtitle__one">{feature.subtitle}</span>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <Link className="theme-border-btn" href="/about">
                Read More <FaArrowRight className="ml-10" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="col-xl-6 col-lg-6">
        {feature.imageFirst || isCarousel ? (
          <div className="feature__area-left">
            <div
              className={`feature__area-left-title ${
                feature.id === 3 ? "p-4" : ""
              }`}
            >
              <span className="subtitle__one">{feature.subtitle}</span>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <Link className="theme-border-btn" href="/about">
                Read More <FaArrowRight className="ml-10" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="feature__area-image">
            <Image src={feature.image} alt="" width={600} height={600} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="feature__area">
      <div className="container">
        {/* Desktop View - Original Layout */}
        <div className="d-none d-lg-block">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Medium and Small Devices - Swiper Carousel */}
        <div className="d-lg-none">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".feature-swiper-pagination",
            }}
            loop={true}
            className="feature-swiper"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <FeatureCard feature={feature} isCarousel={true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="feature-swiper-pagination text-center"></div>
        </div>
      </div>

      <style jsx global>{`
        .feature-swiper {
          // padding-bottom: 50px;
        }

        .feature-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .feature-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .feature-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }

        /* Ensure consistent styling in carousel */
        .carousel-feature-card {
          margin-bottom: 0;
        }

        .carousel-feature-card .theme-border-btn {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 991.98px) {
          .carousel-feature-card .row {
            margin-bottom: 20px;
          }

          .carousel-feature-card .feature__area-image,
          .carousel-feature-card .feature__area-left {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
