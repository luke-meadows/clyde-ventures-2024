'use client';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BackgroundImage from './BackgroundImage';
import Link from 'next/link';
export default function CaseStudies({ caseStudyTopic }) {
  const insightCards = [
    {
      insightId: '1',
      title:
        'Reduced unbilled debt resulting in collections uplift of £20m over 18 months.',
      date: '29/11/2023',
      author: 'Graham Mathie',
      url: '/case-studies/unbilled-debt',
      image: '/images/blog-images/hero/compliance-stores-background.jpg',

      tags: ['Energy', 'Consumer Standards', 'Customer Experience'],
    },
    {
      insightId: '2',
      title:
        'Confirmed the level of debt associated with leakage and segmented the cleansed portfolio to deliver a £2m upside.',
      date: '01/12/2023',
      author: 'Ross Bern',

      url: '/insights/debt-value',
      image: '/images/blog-images/hero/opex-background.jpg',
      tags: ['Revenue Generation', 'Customer Experience'],
    },
    {
      insightId: '3',
      title:
        'Developed a process control and exceptions management framework to facilitate the collection of over £13M in debt.',
      date: '06/12/2023',
      author: 'Ross Bern',
      url: '/case-studies/controls-and-exception-management',
      image: '/images/blog-images/hero/domestic-sales-background.jpeg',

      tags: ['Utilities', 'Debt'],
    },
    {
      insightId: '4',
      title:
        "Conducted a LEAN review across a client's operations to deliver £1.95M in benefits.",
      date: '18/12/2023',
      author: 'Amber Morton',
      url: 'insights/domestic-sales',
      image: '/images/blog-images/hero/compliance-stores-background.jpg',

      tags: ['Utilities', 'OPEX', 'Energy', 'Consumer Standards'],
    },
    {
      insightId: '5',
      title:
        'Developed a value model linking operational activities to optimise regulatory outcome delivery incentives.',
      date: '08/01/2024',
      author: 'David Philipson',
      url: '/case-studies/value-model',
      image: '/images/blog-images/thumbnail/debt-value-thumbnail.jpg',
      tags: ['Utilities', 'Debt', 'Energy'],
    },
    {
      insightId: '6',
      title:
        'Implemented operational excellence and developed a new Target Operating Model to reduce headcount by 25%.',
      date: '11/01/2024',
      author: 'Kerry Moran',
      url: '/case-studies/target-operating-model',
      image: '/images/blog-images/hero/opex-background.jpg',

      tags: ['Utilities', 'Consumer Standards', 'Energy'],
    },
    {
      insightId: '6',
      title:
        "Conducted financial and operational due diligence on a technology led, energy retailer to provide assurance to support our client's proposed $20m investment.",
      date: '11/01/2024',
      author: 'Ross Bern',
      url: '/case-studies/financial-operational-due-diligence',
      image: '/images/blog-images/hero/domestic-sales-background.jpeg',
      tags: ['Utilities', 'Consumer Standards', 'Energy'],
    },
  ];
  return (
    <div className="bg-black-text noselect">
      <div className="page-break" />
      <div className="inner-container text-white">
        <h2 className="section-heading">Case Studies</h2>
        <p className="mb-6 font-normal">
          Clyde Ventures: Learn how we provide value to our clients.
        </p>
        <div>
          <div className="case-studies-swiper md:hidden">
            <Swiper
              modules={[Pagination, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
            >
              {insightCards.map((item, i) => {
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
          <div className="case-studies-swiper hidden md:block">
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
              {insightCards.map((item, i) => {
                return (
                  <SwiperSlide className=" bg-super-light-grey  rounded-lg p-4 relative card-rounding shadow-bottom">
                    <div className="flex flex-col justify-between gap-6 h-full text-white">
                      <div>
                        <h5 className="text-xl mb-2 font-semibold">
                          {item.title}
                        </h5>
                        {/* <p className="text-sm font-normal mb-2">{item.subtitle}</p> */}
                      </div>
                      <Link href={item.url}>
                        <button className="bg-primary-orange text-black-text  pr-2.5 pl-3 h-10 min-w-fit w-fit text-xs font-semibold rounded-l-[6px] rounded-r-[20px] ">
                          Read Article <i className="icon-angle-right" />
                        </button>
                      </Link>
                    </div>
                    <BackgroundImage image={item.image} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="page-break" />
    </div>
  );
}
