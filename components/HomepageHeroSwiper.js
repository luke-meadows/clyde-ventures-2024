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
        'Workflows and journeys created for key processes in deployable modules to support operational processes.',
      image: Article3Image,
      url: '/insights',
      type: 'Case Study',
    },
    {
      title: 'Energy: How suppliers can improve customer experience.',
      subtitle:
        'Exploring how to deliver for consumers whilst managing the operating cost cap and mitigating downside pressures to margin.',
      image: Article1Image,
      url: '/insights',
      type: 'Insight',
    },
    {
      title:
        'Clyde Ventures identifies £1.95m of benefits in a revenue growth programme for UK wide fuel distributor.',
      subtitle:
        'Cash is King for all Utility companies and increasing Revenue is the fastest way to improve your cash position.',
      image: Article2Image,
      url: '/insights',
      type: 'Case Study',
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
          className="h-[500px] relative mb-[90px] "
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        >
          {heroContentData.map((item) => (
            <SwiperSlide>
              <div className="hero-inner-container">
                <Link
                  href={
                    item.type === 'Case Study' ? '/case-studies' : '/insights'
                  }
                >
                  <p className="text-primary-orange mb-1 ml-1 underline-offset-2 underline">
                    {item.type}
                  </p>
                </Link>
                <h1 className="hero-title">{item.title}</h1>
                <p className="hero-subtitle">{item.subtitle}</p>
                <button className="bg-primary-orange text-black-text  pr-2.5 pl-3 h-10 min-w-fit w-fit text-xs font-semibold rounded-l-[6px] rounded-r-[20px] ">
                  Read Article <i className="icon-angle-right" />
                </button>
              </div>
              <BackgroundImage image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HeroWrapper>
  );
}
