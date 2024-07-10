"use client";

import Image from "next/image";
import "swiper/css/bundle";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import qoute from "../../images/reciew-quote.png";
import revieImg2 from "../../images/review-lady.png";
import revieImg1 from "../../images/review-men.png";

const ReviewSlider = () => {
  return (
    <Swiper
      loop={true}
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      spaceBetween={50}
    >
      <SwiperSlide>
        <div className="h-[250px] border border-[#E6E6E6] p-8 rounded-md font-Source_Sans">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Image src={revieImg1} alt="review 1"></Image>
              <div>
                <h2 className="text-[20px] font-semibold">Awlad Hossain</h2>
                <p>Product Designer</p>
              </div>
            </div>
            <div>
              <Image src={qoute} alt="qoute"></Image>
            </div>
          </div>
          <p className="pt-8">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[250px] border border-[#E6E6E6] p-8 rounded-md font-Source_Sans">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Image src={revieImg2} alt="review 1"></Image>
              <div>
                <h2 className="text-[20px] font-semibold">Awlad Hossain</h2>
                <p>Product Designer</p>
              </div>
            </div>
            <div>
              <Image src={qoute} alt="qoute"></Image>
            </div>
          </div>
          <p className="pt-8">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[250px] border border-[#E6E6E6] p-8 rounded-md font-Source_Sans">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Image src={revieImg1} alt="review 1"></Image>
              <div>
                <h2 className="text-[20px] font-semibold">Awlad Hossain</h2>
                <p>Product Designer</p>
              </div>
            </div>
            <div>
              <Image src={qoute} alt="qoute"></Image>
            </div>
          </div>
          <p className="pt-8">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[250px] border border-[#E6E6E6] p-8 rounded-md font-Source_Sans">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Image src={revieImg2} alt="review 1"></Image>
              <div>
                <h2 className="text-[20px] font-semibold">Awlad Hossain</h2>
                <p>Product Designer</p>
              </div>
            </div>
            <div>
              <Image src={qoute} alt="qoute"></Image>
            </div>
          </div>
          <p className="pt-8">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
