import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export const LatestProduct = () => {
    const TestimonialData = [
        {
            id: 1,
            name: "Men's T-Shirts Collection",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/101/101",
        },
        {
            id: 2,
            name: "Men's T-Shirts Collection",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/102/102",
        },
        {
            id: 3,
            name: "Men's T-Shirts Collection",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/104/104",
        },
        {
            id: 5,
            name: "Kid's Stylish T-Shirts Collection",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/103/103",
        },
        {
            id: 6,
            name: "Women's Suits Sets",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/104/104",
        },
        {
            id: 7,
            name: "Kid's T-Shirts Collection",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
            img: "https://picsum.photos/103/103",
        },
    ];
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <LatestProductWrapper>
            <section className="bg-white dark:bg-gray-900 w-full flex justify-center items-center image">

                <div data-aos="zoom-in" className="lg:w-4/6 w-full mx-auto">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className="my-6">
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-4 text-center py-8 px-6 mx-4 rounded-xl  relative"
                                >
                                    <div><p className="text-color">The Latest Collection</p></div>
                                    {/* <div className="mb-4">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full w-20 h-20"
                                        />
                                    </div> */}
                                    <div className="flex flex-col justify-center items-center gap-4">
                                        <div className="space-y-3 text-center">
                                            <h1 className="text-5xl font-light  text-black/80 dark:text-light">
                                                {data.name}
                                            </h1>
                                            {/* <p className="text-md text-gray-500">{data.text}</p> */}
                                            <button className="text-color underline underline-offset-8 under text-xl">Shop Now</button>
                                        </div>
                                    </div>
                                    {/* <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p> */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </LatestProductWrapper>
    )
}

const LatestProductWrapper = styled.div`
.image{
    background-image: url(https://preview.colorlib.com/theme/ashion/img/banner/banner-1.jpg.webp);
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`
