'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import UtilitiesImage from '@public/images/industry-images/utilities-card.jpg';
import ProfessionalServicesImage from '@public/images/industry-images/professional-services-card.jpg';
import ManufacturingImage from '@public/images/industry-images/manufacturing-card.jpg';
import EducationImage from '@public/images/industry-images/education.jpg';
import LogisticsImage from '@public/images/industry-images/logistics.jpg';
import TechnologyImage from '@public/images/industry-images/technology.jpg';

import { Pagination, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
export default function IndustriesSwiper() {
  const industries = [
    {
      title: 'Utilities',
      subtitle:
        'Most of the Clyde Ventures team have their roots in the Utility sector, we understand the operation at its foundation enabling us to tailor solutions to your needs. Partnering with us grants you access to a team of seasoned professionals, adept at crafting systems that harmonise with meeting the challenges of a modern Utility company.',
      image: UtilitiesImage,
      url: '/sectors/utilities',
      icon: '/icons/utilities.png',
    },
    {
      title: 'Professional Services',
      subtitle:
        "Elevate your professional services enterprise with tailored solutions designed to tackle the industry's most pressing challenges. At Clyde Ventures, we understand the intricacies of client acquisition and retention, the regulatory complexities, and the imperative of embracing technological innovation. Our comprehensive approach combines industry expertise with innovative strategies to help your business thrive in today's dynamic landscape.",
      image: ProfessionalServicesImage,
      url: '/sectors/utilities',
      icon: '/icons/professional-services.png',
    },
    {
      title: 'Manufacturing',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: ManufacturingImage,
      url: '/sectors/utilities',
      icon: '/icons/manufacturing.png',
    },
    {
      title: 'Technology',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: TechnologyImage,
      url: '/sectors/utilities',
      icon: '/icons/technology.png',
    },
    {
      title: 'Education',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: EducationImage,
      url: '/sectors/utilities',
      icon: '/icons/education.png',
    },
    {
      title: 'Transport & Logistics',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: LogisticsImage,
      url: '/sectors/utilities',
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
              <div className="h-full bg-black-text  ">
                {/* Card Top Section */}
                <div className="top-section">
                  <div className="card-image relative h-44">
                    <div className="absolute left-0 top-0 h-full w-full">
                      <Image
                        src={industry.image}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <div className="card-icon h-16 aspect-square center-contents rounded-full bg-primary-orange absolute bottom-0 z-[1] translate-y-[50%] transform-center fill-primary-orange">
                      <Image src={industry.icon} width={35} height={35} />
                    </div>
                  </div>
                </div>

                {/* Card Lower Section */}
                <div className="lower-section pt-10  text-white p-6 bg-black-text h-full]">
                  <h3 className="font-semibold text-xl mb-2 grow text-primary-orange">
                    {industry.title}
                  </h3>

                  <p className="text-sm font-normal text-card-bg pb-6">
                    {industry.subtitle}
                  </p>
                  <Link href={industry.url} className="mt-auto">
                    <button className="button text-xs font-black-text font-semibold mt-auto">
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
