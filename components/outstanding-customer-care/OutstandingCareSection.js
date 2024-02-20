import Image from 'next/image';
import OutstandingCareItem from './OutstandingCareItem';

export default function OutstandingCareSection() {
  const bulletPointItems = [
    {
      title: 'Centralised Case Management',
      description:
        'Service Cloud enables efficient management of customer inquiries, complaints, and support requests through its robust case management system. Cases can be tracked, assigned, and escalated as needed, ensuring timely resolution and superior customer service.',
    },
    {
      title: 'Omni-Channel Support',
      description:
        'Service Cloud allows businesses to provide support across multiple channels such as email, phone, social media, chat, and self-service portals. This omnichannel approach ensures consistent and personalised support experiences across all touchpoints.',
    },
    {
      title: 'Service Console',
      description:
        'The Service Console provides a unified interface for service agents to view and manage customer interactions, cases, and relevant information in a single, customisable workspace. It streamlines workflow, enhances productivity, and enables agents to deliver faster, more personalised support.',
    },
    {
      title: 'Service Analytics',
      description:
        'Service Cloud offers powerful analytics and reporting tools that provide insights into key performance metrics such as case resolution times, customer satisfaction scores, and agent productivity. These insights enable businesses to identify trends, optimise processes, and make data-driven decisions to continuously improve service quality.',
    },
  ];
  return (
    <div className="inner-container flex gap-12">
      {/* LEFT */}
      <div className="flex-1 ">
        <h2 className="section-heading">Deliver outstanding customer care</h2>
        <div className="pt-4">
          <OutstandingCareItem />
          <OutstandingCareItem />
          <OutstandingCareItem />
          <OutstandingCareItem />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex-1 ">
        <div className="min-h-[400px] w-full relative">
          <Image
            src="/images/service-cloud-screenshot.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="min-h-[360px] w-full relative">
          <Image
            src="/images/service-cloud-screenshot2.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
