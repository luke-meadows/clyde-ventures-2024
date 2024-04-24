import Image from 'next/image';
import OutstandingCareItem from './outstanding-customer-care/OutstandingCareItem';

export default function WhyChooseClyde({ title }) {
  return (
    <div className="inner-container">
      <h2 className="section-heading">Why Choose Clyde Ventures</h2>
      <p className="section-subheading">
        Headquartered in Glasgow with a national team of more than 30 UK based
        General and Salesforce Consultants, we have doubled in size over the
        last 2 years and have now delivered multiple projects across 4
        continents. Clyde Ventures&apos; unique USP blends our experience across
        Industry, Operations and Salesforce with our social recruitment strategy
        to offer Clients an unparalleled value proposition
      </p>
      <div className="bg-black py-12 rounded">
        <Image
          src="/images/value-proposition.png"
          width={400}
          height={100}
          className="mx-auto"
        />
        <div className="text-center text-white">
          <h5 className="font-bold text-lg">Value Proposition</h5>
          <p className="font-normal max-w-[70ch] mx-auto">
            We combine these skills to provide a technical solution that meets
            operational needs and{' '}
            <span className="font-bold">
              generates quantifiable value at pace.
            </span>
          </p>
        </div>
      </div>
      <div className="page-break"></div>
      <div className="grid grid-cols-2">
        <OutstandingCareItem item="industry" />
        <OutstandingCareItem item="salesforce" />
        <OutstandingCareItem item="operations" />
        <OutstandingCareItem item="force-for-social-good" />
      </div>
    </div>
  );
}
