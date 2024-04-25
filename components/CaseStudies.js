'use client';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BackgroundImage from './BackgroundImage';
export default function CaseStudies({ caseStudyTopic }) {
  const caseStudiesContentData = [
    {
      title: 'Regulatory outcome delivery incentives for UK Energy company.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: '/images/blog-images/hero/compliance-stores-background.jpg',
      url: '/insights',
      type: 'Case Study',
    },
    {
      title: 'Energy: How suppliers can improve customer experience.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: '/images/blog-images/hero/opex-background.jpg',
      url: '/insights',
      type: 'Insight',
    },
    {
      title: '£1.95m of benefits identified in a revenue growth programme.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: '/images/blog-images/hero/domestic-sales-background.jpeg',
      url: '/insights',
      type: 'Case Study',
    },
    {
      title: 'Regulatory outcome delivery incentives for UK Energy company.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: '/images/blog-images/hero/compliance-stores-background.jpg',
      url: '/insights',
      type: 'Case Study',
    },
    {
      title: 'Energy: How suppliers can improve customer experience.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: '/images/blog-images/hero/opex-background.jpg',
      url: '/insights',
      type: 'Insight',
    },
    {
      title: '£1.95m of benefits identified in a revenue growth programme.',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      image: '/images/blog-images/hero/domestic-sales-background.jpeg',
      url: '/insights',
      type: 'Case Study',
    },
  ];
  return (
    <div className="bg-black-text noselect">
      <div className="page-break" />
      <div className="inner-container text-white">
        <h2 className="section-heading">{caseStudyTopic} Case Studies</h2>
        <p className="mb-6 font-normal">
          Learn how Clyde Ventures have provided value to our clients with{' '}
          {caseStudyTopic}.
        </p>
        <div className="case-studies-swiper">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
          >
            {caseStudiesContentData.map((item, i) => {
              return (
                <SwiperSlide className=" bg-super-light-grey  rounded-lg p-4 relative card-rounding shadow-bottom">
                  <div className="flex flex-col justify-between gap-6 h-full text-white">
                    <div>
                      <h5 className="text-xl mb-2 font-semibold">
                        {item.title}
                      </h5>
                      {/* <p className="text-sm font-normal mb-2">{item.subtitle}</p> */}
                    </div>

                    <button className="bg-primary-orange text-black-text  pr-2.5 pl-3 h-10 min-w-fit w-fit text-xs font-semibold rounded-l-[6px] rounded-r-[20px] ">
                      Read Article <i className="icon-angle-right" />
                    </button>
                  </div>
                  <BackgroundImage image={item.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="page-break" />
    </div>
  );
}
