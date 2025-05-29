"use client";
import blogsData from "@/components/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Blog() {
  const blogs = blogsData.slice(0, 3);
  const [active, setActive] = useState(1);
  const handelActive = (index) => {
    setActive(index);
  };

  const BlogCard = ({ blog, index, isCarousel = false }) => (
    <div
      className={`blog__area-item ${
        active === index ? "blog__area-item-hover" : ""
      } ${isCarousel ? "carousel-card" : ""}`}
      onMouseEnter={() => handelActive(index)}
    >
      <div className="blog__area-item-image">
        <Link href={`/blog-details/${blog.id}`}>
          <Image src={blog.img} alt="blog-image" width={500} height={500} />
        </Link>
      </div>
      <div className="blog__area-item-content">
        <div className="blog__area-item-content-box">
          <div className="blog__area-item-content-box-date">
            <h3>{blog.date}</h3>
            <span>
              {blog.month} {blog.year}
            </span>
          </div>
          <div className="blog__area-item-content-box-title">
            <h5>
              <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
            </h5>
          </div>
        </div>
        <div className="blog__area-item-content-btn">
          <Link className="simple-btn-2" href={`/blog-details/${blog.id}`}>
            Read More
            <i className="fal fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="blog__area section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="blog__area-title">
              <span className="subtitle__one">Our Blog</span>
              <h2>Read Our Blog and News</h2>
            </div>
          </div>
        </div>

        {/* Desktop View - Original Grid Layout */}
        <div className="row d-none d-lg-flex">
          {blogs?.map((blog, index) => (
            <div key={index} className="col-xl-4 col-lg-6 mt-30">
              <BlogCard blog={blog} index={index} />
            </div>
          ))}
        </div>

        {/* Medium and Small Devices - Swiper Carousel */}
        <div className="d-lg-none mt-30">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".blog-swiper-pagination",
            }}
            loop={true}
            className="blog-swiper"
          >
            {blogs?.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogCard blog={blog} index={index} isCarousel={true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="blog-swiper-pagination text-center"></div>
        </div>
      </div>

      <style jsx global>{`
        .blog-swiper {
          // padding-bottom: 50px;
        }

        .blog-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .blog-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .blog-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }

        /* Ensure Read More button is always visible in carousel */
        .carousel-card .blog__area-item-content-btn {
          opacity: 1 !important;
          visibility: visible !important;
          margin-top: 20px;
        }

        .carousel-card .blog__area-item-content-btn .simple-btn-2 {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 991.98px) {
          .blog__area-item {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}
