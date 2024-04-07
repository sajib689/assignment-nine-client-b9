import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Banner = () => {
  return (
    <Swiper
    data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="w-full h-[90vh] rounded-lg"
          src={img1}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[90vh] rounded-lg"
           src={img2}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[90vh] rounded-lg"
           src={img3}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
