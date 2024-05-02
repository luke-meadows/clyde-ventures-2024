import Link from 'next/link';
export default function InfoBox({ infobox = 'sales-cloud', children }) {
  const infoboxes = {
    'integration-crm': {
      title: '',
      subtitle: '',
      button: 'contact',
    },
    'sales-cloud': {
      title: 'Clyde Ventures - your Salesforce integration partner',
      subtitle: [
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      ],
    },
    'service-cloud': {
      title: 'Service Cloud',
      subtitle: [
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      ],
    },
    mba: {
      title: 'Proudly Partnered With Strathclyde University',
      subtitle: [
        'We are proud to support Strathclyde Business School, a leading university, in creating a first-of-its-kind collaborative executive MBA program. This innovative MBA focuses on equipping future leaders with the necessary skills to address the challenges of delivering net-zero emissions and reversing global warming.',
        'In collaboration with Strathclyde Business School, we have formed strategic partnerships with industry leaders who are at the forefront of trailblazing new and innovative strategies to create a better world. This course is specifically designed for professionals who aspire to make a significant impact in their respective fields.',
        ,
      ],
    },
  };
  const { title, subtitle } = infoboxes[infobox];
  return (
    <div className="inner-container-2 text-center">
      <div className="p-8 bg-black text-white card-rounding">
        <h2 className="text-3xl mb-6 font-semibold ">{title}</h2>
        {subtitle.map((p, i) => (
          <p key={i} className="text-md mb-4 font-normal">
            {p}
          </p>
        ))}
        <div className="flex gap-6 items-center mt-[25px] mx-auto w-fit text-sm ">
          <div className="hidden md:block">
            <Link href="/contact" className="button py-3 center-contents">
              Contact us
            </Link>
          </div>
          {/* Additional buttons */}
          {children}
        </div>
      </div>
    </div>
  );
}
