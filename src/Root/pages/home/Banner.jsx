import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

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
                <div className="hero h-full" style={{ backgroundImage: 'url(https://i.ibb.co/NKLrRTn/banner1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="mb-5 text-5xl font-bold">
                                <TypeAnimation
                                    sequence={[
                                        'Discover the World of Books, Your Gateway to Knowledge and Imagination'
                                    ]}
                                    style={{width: '700px', textAlign:'center', display: 'inline-block',  }}                                   
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
                <div className="hero h-full" style={{ backgroundImage: 'url(https://i.ibb.co/PrkHFRz/banner2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="mb-5 text-5xl font-bold">
                            <TypeAnimation
                                    sequence={[7000,
                                        'Explore, Borrow, and Dive into Endless Stories at Your Fingertips'
                                    ]}                                   
                                    style={{width: '700px', textAlign:'center', display: 'inline-block',  }}                                   
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
                <div className="hero h-full" style={{ backgroundImage: 'url(https://i.ibb.co/vJRDdg1/banner3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-1/2 flex items-center justify-center">
                            <h1 className="mb-5 text-5xl font-bold">
                            <TypeAnimation
                                    sequence={[14000,
                                        'Your Library, Your Universe of Learning, Adventure, and Inspiration'
                                    ]}                                   
                                    style={{width: '700px', textAlign:'center', display: 'inline-block',  }}                                   
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

export default Banner;

// image links:
// https://i.ibb.co/NKLrRTn/banner1.jpg
// https://i.ibb.co/PrkHFRz/banner2.jpg
// https://i.ibb.co/vJRDdg1/banner3.jpg
