import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TrendingTopic = () => {

    const data = [
        {
            title: "Alisher Raxmatov",
            article: 38,
            img: "1.png",
        },
        {
            title: "Alisher Raxmatov",
            article: 63,
            img: "2.png",
        },
        {
            title: "Alisher Raxmatov",
            article: 78,
            img: "3.png",
        },
        {
            title: "Alisher Raxmatov",
            article: 125,
            img: "4.png",
        },
        {
            title: "Alisher Raxmatov",
            article: 45,
            img: "5.png",
        },
    ];


    return (
        <>
            <div className="swiper-container swiper-group-6">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
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
                    {data.map((item, i) => (
                        <SwiperSlide className="swiper-slide" key={i}>
                            <div className="card-style-1">
                                <Link href="/blog-archive">
                                    <div className="card-image">
                                        <img src={`assets/imgs/page/sportchilar/${item.img}`} alt="Genz" />
                                        <div className="card-info">
                                            <div className="info-bottom">
                                                <h6 className="color-white mb-5">{item.title}</h6>
                                                {/* <p className="text-xs color-gray-500"> {item.article} </p> */}
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

