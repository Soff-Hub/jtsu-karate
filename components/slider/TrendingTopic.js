import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import client from "../../repositories/repository";

SwiperCore.use([Autoplay, Navigation]);
const TrendingTopic = () => {
  const [videoBanner, setVideoBanner] = useState([]);
  const { langauge } = useSelector((state) => state?.textClass);

  async function getVideosBanners() {
    try {
      const resp = await client.get(`/common/students/`, {
        headers: {
          "Accept-language": langauge,
        },
      });
      setVideoBanner(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getVideosBanners();
  }, [langauge]);

  return (
    <>
      <div className="swiper-container swiper-group-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-style-2",
            nextEl: ".swiper-button-next-style-2",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1350: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="swiper-wrapper"
        >
          {videoBanner.map((item, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div className="card-style-1">
                <Link href="/blog-archive">
                  <div className="card-image">
                    <img src={item.image} alt="Genz" />
                    <div className="card-info">
                      <div className="info-bottom">
                        <h6 className="color-white mb-5">{item.name}</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev swiper-button-prev-style-2" />
        <div className="swiper-button-next swiper-button-next-style-2" />
      </div>
    </>
  );
};

export default TrendingTopic;
