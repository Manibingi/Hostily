"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/img/avatar/testimonial-1.jpg",
    name: "David Beckham",
    position: "UX Designer",
    des: "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend",
  },
  {
    image: "/img/avatar/testimonial-2.jpg",
    name: "David Fincher",
    position: "UX Designer",
    des: "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend",
  },
  {
    image: "/img/avatar/testimonial-3.jpg",
    name: "Ridley Scott",
    position: "UX Designer",
    des: "Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    clickable: true,
                    el: ".testimonial-swiper-pagination",
                    dynamicBullets: false,
                  }}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="testimonial-swiper"
                >
                  {testimonialData?.map((data, id) => (
                    <SwiperSlide key={id}>
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>{data.name}</h4>
                          <span>{data.position}</span>
                          <p>{data.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="testimonial-swiper-pagination mt-4 text-center"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          // padding-bottom: 50px;
        }

        .testimonial-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
        }

        .testimonial-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ddd;
          opacity: 0.5;
          margin: 0 5px;
        }

        .testimonial-swiper-pagination .swiper-pagination-bullet-active {
          background: #b89146;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Testimonial;
