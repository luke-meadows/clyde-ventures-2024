import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import { salesforceServices } from './SolutionsGrid';

export default function MoreSalesforceSolutions({ current }) {
  return (
    <div className="inner-container ">
      <h2 className="section-heading">More Salesforce Solutions</h2>
      <div className="flex gap-6 flex-wrap pt-4">
        {salesforceServices.map((service, i) => (
          <Link
            href={service.url}
            key={i}
            className="flex items-center gap-4 py-3 pl-4 pr-1 rounded-full bg-black-text w-fit text-white min-w-fit shadow-bottom"
          >
            {service.title}
            <ArrowIcon />
          </Link>
        ))}
      </div>
    </div>
  );
}
