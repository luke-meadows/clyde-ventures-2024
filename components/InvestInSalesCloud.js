import Image from 'next/image';
import Link from 'next/link';
import SFLogo from '@public/images/salesforce-logo.png';
import CrmGraphic from '@public/images/sales-cloud-graphic.png';
import Background from '@public/images/hero-background.jpg';
import Statistic from './Statistic';

export default function InvestInSalesCloud() {
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
      <div className="inner-container sm:py-4 md:py-16 flex items-center gap-12">
        <div className="partner-section-left">
          <div className="flex flex-col gap-6 relative mb-5">
            <Image src={SFLogo} width={100} />
            <h2 className="text-4xl font-bold leading-tight text-black-text">
              Why invest in Sales Cloud?
            </h2>
          </div>
          <p className="mb-5 text-black-text font-normal text-lg">
            By empowering your sales team with modern CRM solution Sales Cloud,
            you're not just investing in software, you're investing in
            efficiency, agility, and revenue acceleration.
          </p>
          <p className="mb-5 text-black-text font-normal text-lg">
            With features like AI-powered insights, mobile accessibility, and
            seamless integration capabilities, Sales Cloud equips your team with
            the tools they need to close deals faster, nurture customer
            relationships effectively, and stay ahead of the competition.
          </p>
          <p className="mb-5 text-black-text font-normal text-lg">
            Don't just manage your sales process — revolutionise it with Sales
            Cloud and watch your business soar to new heights of success.
          </p>
          <div className="flex pt-4">
            <Statistic
              stat={{
                figure: '44%',
                description: 'Boost in forecast accuracy',
              }}
            />
            <Statistic
              stat={{
                figure: '32%',
                description: 'Average increase in sales productivity',
              }}
            />
          </div>
        </div>
        <div className="partner-section-right hidden md:block">
          <Image src={CrmGraphic} width={1400} />
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
    </div>
  );
}
