import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types';

const Banner = ({ image1, image2, image3, message1, message2, message3 }) => {

    return (
        <Swiper className='h-[500px]'
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 7000 }}
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {/* slide 1 */}
            <SwiperSlide>
                <div className="hero h-full" style={{ backgroundImage: `url(${image1})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="mb-5 text-5xl font-bold">
                                <TypeAnimation
                                    sequence={[
                                        `${message1}`
                                    ]}
                                    style={{ width: '700px', textAlign: 'center', display: 'inline-block', }}
                                    speed={10}
                                    cursor={false}
                                />
                            </h1>


                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
                <div className="hero h-full" style={{ backgroundImage: `url(${image2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="mb-5 text-5xl font-bold">
                                <TypeAnimation
                                    sequence={[7000,
                                        `${message2}`
                                    ]}
                                    style={{ width: '700px', textAlign: 'center', display: 'inline-block', }}
                                    speed={10}
                                    cursor={false}
                                />
                            </h1>

                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
                <div className="hero h-full" style={{ backgroundImage: `url(${image3})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="mb-5 text-5xl font-bold">
                                <TypeAnimation
                                    sequence={[14000,
                                        `${message3}`
                                    ]}
                                    style={{ width: '700px', textAlign: 'center', display: 'inline-block', }}
                                    speed={10}
                                    cursor={false}
                                />

                            </h1>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

Banner.propTypes = {
    image1: PropTypes.string,
    image2: PropTypes.string,
    image3: PropTypes.string,
    message1: PropTypes.string,
    message2: PropTypes.string,
    message3: PropTypes.string,
}

export default Banner;

// image links:
// https://i.ibb.co/NKLrRTn/banner1.jpg
// https://i.ibb.co/PrkHFRz/banner2.jpg
// https://i.ibb.co/vJRDdg1/banner3.jpg
