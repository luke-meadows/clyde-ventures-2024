import Image from 'next/image';
import Link from 'next/link';
export default function WhatWeDo() {
  const whatWeDoCards = [
    {
      title: 'Consultancy',
      icon: '/icons/consultancy.png',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex ratione et nulla odio a fuga, dolore distinctio qui porro dolorum quidem harum labore magni corrupti obcaecati molestias totam atque.',
      link: '/services',
    },
    {
      title: 'Integration',
      icon: '/icons/integration.png',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex dolorum quidem harum labore magni   ratione et nulla odio a Id ex ratione et nulla odio a Id ex ratione et nulla odio a.Id ex ratione et nulla odio a.',
      link: '/services/integration',
    },
    {
      title: 'Education',
      icon: '/icons/education.png',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex ratione et dolorum quidem harum labore magni  nulla odio a fuga, dolore distinctio qui porro dolorum quidem harum labore magni corrupti',
      link: '/services',
    },
    {
      title: 'Manufacturing',
      icon: '/icons/manufacturing.png',
      subtitle:
        'Id ex ratione et nulla odio a fuga, dolore distinctio qui porro dolorum quidem harum labore magni corrupti obcaecati molestias totam atque.',
      link: '/services',
    },
  ];
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center text-black-text">
        What we do
      </h2>
      <p className="section-subheading text-sm text-center text-medium-grey">
        Our CRM consultancy and integration service focuses on translating
        complex business processes into efficient, scalable system solutions. We
        leverage the power of the modern CRM to automate processes, forecast
        outcomes and analyse customer data..
      </p>
      <div className="grid grid-cols-2 gap-6">
        {whatWeDoCards.map((card, i) => {
          return (
            // Container
            <div
              key={i}
              className="shadow-card flex-1 card-rounding bg-black-text"
            >
              {/* Card Top */}
              <div className="card-top flex justify-between items-center px-3 pt-3">
                <div className="card-top-left flex items-center gap-4">
                  <div className="bg-primary-orange h-14 w-14 aspect-square center-contents rounded-full text-lg cursor-pointer">
                    <Image src={card.icon} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-xl text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="card-top-right">
                  <Link href={card.link}>
                    <button className="bg-primary-orange text-dark-grey pl-6 pr-4 h-10 rounded-full min-w-fit w-fit mx-auto shadow-button text-xs font-semibold">
                      Learn More <i className="icon-angle-right" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="p-4">
                <p className="text-sm font-normal mb-2 text-off-white">
                  {card.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
