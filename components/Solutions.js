import SolutionsGrid from './SolutionsGrid';
import SalesforceImage from '../public/images/salesforce-offerings.png';
import Image from 'next/image';
export default function Solutions({ solution }) {
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center">Our Solutions</h2>
      <div className="section-subheading">
        {solution === 'salesforce' && (
          <div>
            <p className="mb-1">
              We tailor each Salesforce integration to meet the unique needs of
              each of our clients. It is crucial for optimising business
              processes and enhancing customer satisfaction as one size does not
              fit all. We do this by using any available Salesforce products
              that the solution may require to meet the customer’s needs. Here
              are a few of the products:
            </p>
            <Image src={SalesforceImage} className="w-4/5 mx-auto" />
          </div>
        )}
      </div>
      <SolutionsGrid solution={solution} />
    </div>
  );
}
