import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, SwiperOptions } from 'swiper';
import { SlideshowProps } from '../../types/props';
import 'swiper/css';
import Image from '../Image';

const options: SwiperOptions = {
  autoplay: {
    delay: 2600
  },
  loop: true,
  modules: [
    Autoplay
  ],
  speed: 1500
};

const Slideshow = ({
  className, images, slidesPerView, gap, width, height
}: SlideshowProps): JSX.Element => (
  <Swiper
    {...options}
    className={`${className}__slideshow`}
    slidesPerView={slidesPerView}
    slidesPerGroup={slidesPerView}
    spaceBetween={gap}
  >
    {
      images.map(({ src, alt }, index) => (
        <SwiperSlide key={index}>
          <Image
            width={width}
            height={height}
            src={src}
            alt={alt}
            className="slideshow__image"
          />
        </SwiperSlide>
      ))
    }
  </Swiper>
);

export default Slideshow;
