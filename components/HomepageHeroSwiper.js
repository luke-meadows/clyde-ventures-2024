'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import Article1Image from '@public/images/blog-images/hero/opex-background.jpg';
import Article2Image from '@public/images/blog-images/hero/domestic-sales-background.jpeg';
import Article3Image from '@public/images/blog-images/hero/compliance-stores-background.jpg';
import Link from 'next/link';
import HeroWrapper from './HeroWrapper';
import BackgroundImage from './BackgroundImage';

export default function HomepageHeroSwiper() {
  const heroContentData = [
    {
      title:
        'Clyde Ventures develops a value model to optimise regulatory outcome delivery incentives for UK Energy company.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: Article3Image,
      url: '/case-studies/value-model',
      type: 'Case Study',
    },
    {
      title: 'Energy: How suppliers can improve customer experience.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: Article1Image,
      url: '/insights/consumer-standards',
      type: 'Insight',
    },
    {
      title:
        'Clyde Ventures identifies £1.95m of benefits in a revenue growth programme for UK wide fuel distributor.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: Article2Image,
      url: '/insights/domestic-sales',
      type: 'Insight',
    },
  ];
  return (
    <HeroWrapper>
      <div className="homepage-hero">
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-[350px] relative  "
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        >
          {heroContentData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="hero-inner-container">
                <p className="text-primary-orange ml-1 text-sm font-normal w-fit rounded mb-2">
                  {item.type}
                </p>
                <h1 className="hero-title-2">{item.title}</h1>
                {/* <p className="hero-subtitle">{item.subtitle}</p> */}
                <Link href={item.url}>
                  <button className="bg-primary-orange text-black-text pr-2.5 pl-3 h-10 min-w-fit w-fit text-xs font-semibold rounded-l-[6px] rounded-r-[20px] ">
                    Read Article <i className="icon-angle-right" />
                  </button>
                </Link>
              </div>
              <BackgroundImage image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HeroWrapper>
  );
}
