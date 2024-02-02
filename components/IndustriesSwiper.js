'use client';
import '@styles/custom-swiper-styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import UtilitiesImage from '@public/images/industry-images/utilities-card.jpg';
import ProfessionalServicesImage from '@public/images/industry-images/professional-services-card.jpg';
import ManufacturingImage from '@public/images/industry-images/manufacturing-card.jpg';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
export default function IndustriesSwiper() {
  const industries = [
    {
      title: 'Utilities',
      subtitle:
        'Position your business for the future of energy with personalised service, unified customer and asset data, and business agility. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources.',
      image: UtilitiesImage,
      url: '/industries/utilities',
      icon: '/icons/utilities.png',
    },
    {
      title: 'Professional Services',
      subtitle:
        'Position your business for the future of energy with personalised service, unified customer and asset data, and business agility. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources.',
      image: ProfessionalServicesImage,
      url: '/industries/utilities',
      icon: '/icons/professional-services.png',
    },
    {
      title: 'Manufacturing',
      subtitle:
        'Position your business for the future of energy with personalised service, unified customer and asset data, and business agility. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources.',
      image: ManufacturingImage,
      url: '/industries/utilities',
      icon: '/icons/manufacturing.png',
    },
    {
      title: 'Technology',
      subtitle:
        'Position your business for the future of energy with personalised service, unified customer and asset data, and business agility. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources.',
      image: UtilitiesImage,
      url: '/industries/utilities',
      icon: '/icons/technology.png',
    },
    {
      title: 'Education',
      subtitle:
        'Position your business for the future of energy with personalised service, unified customer and asset data, and business agility. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources.',
      image: ProfessionalServicesImage,
      url: '/industries/utilities',
      icon: '/icons/education.png',
    },
    {
      title: 'Transport & Logistics',
      subtitle:
        'Position your business for the future of energy with personalised service, unified customer and asset data, and business agility. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources. Drive adoption in utility clean energy programs and connect your customers with energy efficiency and electrification resources.',
      image: ManufacturingImage,
      url: '/industries/utilities',
      icon: '/icons/transport.png',
    },
  ];
  return (
    <div className="industries-swiper">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {industries.map((industry, i) => {
          return (
            <SwiperSlide key={i} className="card-rounding mb-16 shadow-bottom">
              <div>
                {/* Card Top Section */}
                <div className="top-section">
                  <div className="card-image relative h-44">
                    <div className="absolute left-0 top-0 h-full w-full">
                      <Image
                        src={industry.image}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="card-icon h-16 aspect-square center-contents rounded-full bg-primary-orange absolute bottom-0 z-[1] translate-y-[50%] transform-center fill-primary-orange">
                      <Image src={industry.icon} width={35} height={35} />
                    </div>
                  </div>
                </div>

                {/* Card Lower Section */}
                <div className="lower-section pt-12 text-center text-white relative inline-block p-6 bg-black-text">
                  <h3 className="font-semibold text-2xl mb-2 grow text-primary-orange">
                    {industry.title}
                  </h3>

                  <p className="text-sm font-normal text-card-bg pb-6">
                    {industry.subtitle}
                  </p>

                  <Link href={industry.url} className="mt-auto">
                    <button className="button text-xs font-black-text font-semibold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
