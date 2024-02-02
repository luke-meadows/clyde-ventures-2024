import Image from 'next/image';
import Background from '@public/images/hero-background.jpg';
import CrmGraphic from '@public/images/crm-graphic.png';
import SFPartnerLogoSquare from '@public/images/sf-partner-logo-square.png';
import Link from 'next/link';

export default function SalesforcePartnerSection() {
  const salesforceSolutions = [
    'Sales Cloud',
    'CPQ',
    'Service Cloud',
    'Net Zero Cloud',
    'Marketing Cloud',
    'Account Engagement',
    'Energy and Utilities Cloud',
    'Strategy Design',
    'Omni-channel',
  ];

  return (
    <div className="relative">
      <div className="inner-container sm:py-4 md:py-24 flex items-center gap-12">
        <div className="partner-section-left">
          <div className="flex items-center gap-6 relative mb-5">
            <Image src={SFPartnerLogoSquare} width={98} />
            <h2 className="text-5xl font-bold leading-tight text-black-text">
              Salesforce Implementation Partner
            </h2>
          </div>
          <p className="mb-5 text-black-text font-normal text-lg">
            Salesforce consulting services help companies make the most of their
            Salesforce platform. As a Salesforce partner, we advise on the
            implementation. Salesforce consulting services help companies make
            the most of their Salesforce platform. As a Salesforce partner, we
            advise on the implementation.
          </p>
          <h2 className="mb-5 font-semibold text-2xl mt-0 text-black-text">
            Our Solutions:
          </h2>
          <div className="solutions flex flex-wrap content-start gap-4  justify-start">
            {salesforceSolutions.map((solution, i) => {
              return (
                <div
                  key={i}
                  className="bg-black-text text-white px-4 h-8 rounded-full min-w-fit mx-auto shadow-button text-xs center-contents flex-1 self-auto"
                >
                  {solution}
                </div>
              );
            })}
          </div>
        </div>
        <div className="partner-section-right hidden md:block">
          <Image src={CrmGraphic} width={1000} />
        </div>
      </div>
      <div className="background absolute left-0 top-0 h-full w-full z-[-1]">
        <Image
          src={Background}
          layout="fill"
          objectFit="cover"
          unoptimized
          className="brightness-105"
        />
      </div>
      <div className="learn-more-button absolute bottom-0 left-1/2 translate-y-[50%] translate-x-[-50%]">
        <Link href="/services/integration" className="">
          <button className="button text-xs outline outline-8 outline-white font-semibold">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
