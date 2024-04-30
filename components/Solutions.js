import SolutionsGrid from './SolutionsGrid';
import SalesforceImage from '../public/images/salesforce-offerings.png';
import Image from 'next/image';
export default function Solutions({ solution }) {
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center">Our Solutions</h2>
      <div className="section-subheading"></div>
      <SolutionsGrid solution={solution} />
    </div>
  );
}
