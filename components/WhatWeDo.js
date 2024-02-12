import Image from 'next/image';
import Link from 'next/link';

export default function WhatWeDo() {
  const whatWeDoCards = [
    {
      title: 'Consultancy',
      icon: '/icons/consultancy.png',
      subtitle:
        'Unlock your business potential with our consultancy services. From sales and debt strategy to process optimisation and culture change, we offer expert guidance to drive growth and innovation.',
      link: '/services/consultancy',
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
          title: 'Due Diligence',
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
        "Seamlessly connect your systems and processes with our integration solutions. Whether it's Salesforce cloud integration or product design, we ensure efficient workflow delivery and design assurance for optimal performance.",
      link: '/services/integration',
      options: [
        {
          title: 'Salesforce: Sales Cloud',
          url: '/services/integration/salesforce/sales-cloud',
        },
        {
          title: 'Salesforce: Marketing Cloud',
          url: '/services/integration/salesforce/Marketing-cloud',
        },
        {
          title: 'Salesforce: Energy & Utilities Cloud',
          url: '/services/integration/salesforce/energy-and-utilities-cloud',
        },
        {
          title: 'Salesforce: Account Engagement',
          url: '/services/integration/salesforce/account-engagement',
        },
        {
          title: 'Salesforce: Service Cloud',
          url: '/services/integration/salesforce/service-cloud',
        },
        {
          title: 'Salesforce: Experience Cloud',
          url: '/services/integration/salesforce/experience-cloud',
        },
        {
          title: 'Salesforce: Field Service Cloud',
          url: '/services/integration/salesforce/field-service-cloud',
        },
        {
          title: 'Product Design',
          url: '/services/consultancy/top-line-growth-salesforce',
        },
        {
          title: 'Workflow Delivery & Design',
          url: '/services/integration/field-optimisation-salesforce',
        },
        {
          title: 'Process Optimisation',
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
        'Empower your future with our MBA program in Sustainable Energy Futures. Gain the knowledge and skills needed to lead in the dynamic field of sustainable energy, shaping a brighter and more sustainable tomorrow.',
      link: '/services',
      options: [
        {
          title: 'Sustainable Energy Futures MBA',
          url: '/services/education/sustainable-energy-futures-mba',
        },
      ],
    },
    {
      title: 'Manufacturing',
      icon: '/icons/manufacturing.png',
      subtitle:
        'Rely on our manufacturing expertise for fire-resistant panels that prioritise safety, durability and the environment. We deliver high-quality solutions to meet the demanding standards of modern requirements.',
      link: '/services/manufacturing',
      options: [
        {
          title: 'Fire Resistant Panels',
          url: '/services/manufacturing/frp',
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
        Clyde Ventures provides many offerings across our four key pillars of
        operation: Consultancy, Integration, Manufacturing, and Education.
        Explore our diverse range of solutions we provide to meet the evolving
        needs of our clients.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {whatWeDoCards.map((card, i) => {
          return (
            <div className="mb-auto h-full">
              {/* // Container */}
              <div
                key={i}
                className="shadow-card card-rounding bg-black-text py-6 h-full"
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
                  <div className="grid grid-cols-2 text-gray-100 gap-x-4 ">
                    {card.options?.map((service, i) => (
                      <Link
                        href={service.url}
                        key={i}
                        className={
                          'text-sm border-b-[2px] py-1  hover:text-primary-orange  cursor-pointer font-normal  border-medium-grey '
                        }
                      >
                        {service.title.includes('Salesforce:') && (
                          <span className="text-salesforce-blue">
                            Salesforce
                          </span>
                        )}
                        {service.title.split('Salesforce')}
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
