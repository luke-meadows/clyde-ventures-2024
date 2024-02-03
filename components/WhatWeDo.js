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
      options: [
        {
          title: 'Sales Strategy',
          url: '/services/consultancy/top-line-growth',
        },
        {
          title: 'Debt Strategy',
          url: '/services/consultancy/top-line-growth',
        },
        {
          title: 'Margin Optimisation',
          url: '/services/consultancy/top-line-growth',
        },
        {
          title: 'Sales Strategy',
          url: '/services/consultancy/top-line-growth',
        },
        {
          title: 'Contact Strategy',
          url: '/services/consultancy/service-excellence',
        },
        {
          title: 'Complaints Strategy',
          url: '/services/consultancy/service-excellence',
        },
        {
          title: 'Vulnerability Strategy',
          url: '/services/consultancy/service-excellence',
        },
        {
          title: 'Existing Process Optimisation',
          url: '/services/consultancy/service-excellence',
        },
        {
          title: 'OPEX reduction & Lean',
          url: '/services/consultancy/opex-optimisation',
        },
        {
          title: 'RPA, Automation & AI',
          url: '/services/consultancy/opex-optimisation',
        },
        {
          title: 'Data & Analytics',
          url: '/services/consultancy/opex-optimisation',
        },
        {
          title: 'Business Care & ROI Due Diligence',
          url: '/services/consultancy/opex-optimisation',
        },
        {
          title: 'Service & TOM Design',
          url: '/services/consultancy/business-and-culture-change',
        },
        {
          title: 'Adoption & Engagement',
          url: '/services/consultancy/business-and-culture-change',
        },
        {
          title: 'Culture Change',
          url: '/services/consultancy/business-and-culture-change',
        },
        {
          title: 'Social Mobility D,E & I',
          url: '/services/consultancy/business-and-culture-change',
        },
      ],
    },
    {
      title: 'Integration',
      icon: '/icons/integration.png',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex dolorum quidem harum labore magni   ratione et nulla odio a Id ex ratione et nulla odio a Id ex ratione et nulla odio a.Id ex ratione et nulla odio a.',
      link: '/services/integration',
      options: [
        {
          title: 'Sales Cloud',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Marketing Cloud',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Energy & Utilities Cloud',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Account Engagement',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Service Cloud',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Experience Cloud',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Product Design',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Field Service Cloud',
          url: '/services/integration/field-optimisation-salesforce',
        },
        {
          title: 'Service Cloud',
          url: '/services/integration/field-optimisation-salesforce',
        },
        {
          title: 'Experience Cloud',
          url: '/services/integration/field-optimisation-salesforce',
        },
        {
          title: 'Product Design',
          url: '/services/integration/field-optimisation-salesforce',
        },
        {
          title: 'ODI Integration & Design',
          url: '/services/integration/wacc-outperformance',
        },
        {
          title: 'Value Modelling',
          url: '/services/integration/wacc-outperformance',
        },
        {
          title: 'Business Case & ROI Due Diligence',
          url: '/services/integration/wacc-outperformance',
        },
        {
          title: 'Design Assurance',
          url: '/services/integration/independence-upskilling-design-authority',
        },
        {
          title: 'Client Capability Cultivation',
          url: '/services/integration/independence-upskilling-design-authority',
        },
      ],
    },
    {
      title: 'Education',
      icon: '/icons/education.png',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex ratione et dolorum quidem harum labore magni  nulla odio a fuga, dolore distinctio qui porro dolorum quidem harum labore magni corrupti',
      link: '/services',
      options: [
        { title: 'Sustainable Futures MBA', url: '/services/education/MBA' },
      ],
    },
    {
      title: 'Manufacturing',
      icon: '/icons/manufacturing.png',
      subtitle:
        'Id ex ratione et nulla odio a fuga, dolore distinctio qui porro dolorum quidem harum labore magni corrupti obcaecati molestias totam atque.',
      link: '/services',
      options: [
        {
          title: 'Fire Resistant Panels',
          url: '/services/manufacturing/FRP',
        },
      ],
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
            <div>
              {/* // Container */}
              <div
                key={i}
                className="shadow-card flex-1 card-rounding bg-black-text py-6"
              >
                {/* Card Top */}
                <div className="card-top flex justify-between items-center px-6">
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
                      <button className="bg-primary-orange text-black-text pl-6 pr-4 h-10 rounded-full min-w-fit w-fit mx-auto shadow-button text-xs font-semibold">
                        Learn More <i className="icon-angle-right" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="px-6 ">
                  <p className="text-sm font-normal text-off-white my-5">
                    {card.subtitle}
                  </p>
                  <div className="grid grid-cols-2 text-off-white gap-x-2 gap-y-3 ">
                    {card.options.map((service, i) => (
                      <Link
                        href={service.url}
                        key={i}
                        className="text-sm border-[1px] py-1 px-3 rounded-full hover:bg-primary-orange hover:text-black-text hover:border-primary-orange cursor-pointer font-normal hover:font-medium center-contents text-center"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
