import SolutionsGrid from './SolutionsGrid';
import SalesforceImage from '../public/images/salesforce-offerings.png';
import Image from 'next/image';
export default function Solutions({ solution }) {
  return (
    <div>
      <div className="inner-container">
        <h2 className="section-heading text-center">Our Solutions</h2>
        <div className="section-subheading"></div>
      </div>
      <div className="max-w-[1300px] mx-auto md:px-8">
        <SolutionsGrid solution={solution} />
      </div>
    </div>
  );
}
