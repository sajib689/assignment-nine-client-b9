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
        <img className="w-full h-[50vh] lg:h-[90vh] md:h-[90vh] rounded-lg"
          src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[50vh] lg:h-[90vh] md:h-[90vh] rounded-lg"
           src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[50vh] lg:h-[90vh] md:h-[90vh] rounded-lg"
           src="https://w0.peakpx.com/wallpaper/588/944/HD-wallpaper-night-factory-industrial.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
