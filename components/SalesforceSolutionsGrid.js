import Image from 'next/image';
import Link from 'next/link';

export const salesforceServices = [
  {
    title: 'Sales Cloud',
    blurb:
      "Sales Cloud is Salesforce's CRM platform tailored for sales teams, offering tools for lead management, opportunity tracking, and sales automation. It enables businesses to streamline their sales processes, improve customer relationships, and drive revenue growth.",
    icon: '/icons/sales.svg',
    url: '/services/integration/salesforce/sales-cloud',
  },
  {
    title: 'Service Cloud',
    blurb:
      "Service Cloud is Salesforce's customer service platform, offering tools for case management, omnichannel support, self-service portals, and AI-powered chatbots. It enables businesses to deliver exceptional customer service experiences, resolve issues efficiently, and drive customer satisfaction and loyalty.",
    icon: '/icons/service.svg',
    url: '/services/integration/salesforce/service-cloud',
  },
  {
    title: 'Marketing Cloud',
    blurb:
      "Marketing Cloud is Salesforce's digital marketing platform that allows businesses to create personalised customer journeys across various channels. It offers capabilities for email marketing, social media advertising, customer segmentation, and analytics to deliver targeted and effective marketing campaigns.",
    icon: '/icons/marketing.svg',
    url: '',
  },
  {
    title: 'Energy and Utilities Cloud',
    blurb:
      'Energy & Utilities Cloud is a specialised industry solution from Salesforce designed to meet the unique needs of energy and utility companies. It provides tools for customer engagement, field service management, asset tracking, and analytics to help organisations optimise operations, enhance customer satisfaction, and drive innovation in the energy sector.',
    icon: '/icons/utilities.png',
    url: '',
  },
  {
    title: 'Experience Cloud',
    blurb:
      "Experience Cloud, formerly known as Community Cloud, is Salesforce's platform for creating branded online communities for customers, partners, and employees. It allows organisations to connect and collaborate with their stakeholders, share knowledge and resources, and provide personalised experiences to drive engagement and loyalty.",
    icon: '/icons/experience.svg',
    url: '',
  },
  {
    title: 'Net Zero Cloud',
    blurb:
      'Net Zero Cloud is a cutting-edge cloud-based solution designed to help organisations achieve carbon neutrality and reduce their environmental impact. It utilise AI and data analytics to monitor and optimise energy usage, resource consumption, and emissions across operations, empowering businesses to make informed decisions and work towards sustainability goals.',
    icon: '/icons/net-zero.svg',
    url: '',
  },
  {
    title: 'Field Service Cloud',
    blurb:
      "Field Service Cloud is Salesforce's solution for managing field service operations, including dispatching, scheduling, mobile workforce management, and IT-powered asset tracking. It helps organisations optimise field service delivery, improve technician productivity, and enhance customer satisfaction.",
    icon: '/icons/field-service.svg',
    url: '',
  },
];

export default function SalesforceSolutionsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 text-white">
      {salesforceServices.map((card, i) => {
        return (
          <div
            key={i}
            className="shadow-card card-rounding bg-black-text py-6 px-6 h-full"
          >
            <div className="card-top flex justify-between items-center pb-4">
              <div className="card-top-left flex items-center gap-4">
                <div className="bg-primary-orange h-14 w-14 aspect-square center-contents rounded-full text-lg cursor-pointer">
                  <Image src={card.icon} width={30} height={30} />
                </div>
                <h3 className="font-semibold text-xl text-white">
                  {card.title}
                </h3>
              </div>
              <div className="card-top-right">
                <Link href={card.url}>
                  <button className="bg-primary-orange text-black-text pl-6 pr-4 h-10 rounded-full min-w-fit w-fit mx-auto shadow-button text-xs font-semibold">
                    Learn More <i className="icon-angle-right" />
                  </button>
                </Link>
              </div>
            </div>
            <p className="font-normal text-sm">{card.blurb}</p>
          </div>
        );
      })}
    </div>
  );
}

// <div
// key={i}
// className="shadow-card card-rounding bg-black-text py-6 h-full"
// >
// {/* Card Top */}
// <div className="card-top flex justify-between items-center px-6">
//   <div className="card-top-left flex items-center gap-4">
//     <div className="bg-primary-orange h-14 w-14 aspect-square center-contents rounded-full text-lg cursor-pointer">
//       <Image src={card.icon} width={30} height={30} />
//     </div>
//     <h3 className="font-semibold text-xl text-white">
//       {card.title}
//     </h3>
//   </div>
