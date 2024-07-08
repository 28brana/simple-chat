import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeBrand = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };
    return (
        <div className="[background:#FFF6F6] py-16 px-28 ">
            <p className="text-3xl font-semibold text-center mb-10">
                200+ online brand collaborations <br /> with Viral Pitch
            </p>
            <Slider {...settings} >
                {
                    [...Array(3)].map((_, key) => (
                        <>
                            <div key={key}>
                                <div className="hidden grid-cols-6 md:grid">
                                    {
                                        [...Array(12)].map((_, index) => (
                                            <div key={index} className="">
                                                <img src={`https://dev.viralpitch.co/virallive/assets/img/brandlogos/${index + 3}.png`} alt={`Brand Logo ${index}`} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div key={key}>
                                <div className="grid-cols-2  md:hidden grid">
                                    {
                                        [...Array(4)].map((_, index) => (
                                            <div key={index} >
                                                <img src={`https://dev.viralpitch.co/virallive/assets/img/brandlogos/${index + 3}.png`} alt={`Brand Logo ${index}`} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }
            </Slider>

        </div>
    )
}

export default HomeBrand;