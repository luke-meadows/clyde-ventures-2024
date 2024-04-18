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
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      ],
    },
  };
  const { title, subtitle } = infoboxes[infobox];
  return (
    <div className="inner-container text-center">
      <div className="p-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black-text text-white card-rounding">
        <h2 className="text-3xl mb-6 font-semibold ">{title}</h2>
        {subtitle.map((p, i) => (
          <p key={i} className="text-md mb-4 font-normal">
            {p}
          </p>
        ))}
        <div className="flex gap-6 items-center mt-[25px] mx-auto w-fit">
          <Link href="/contact" className="button py-3 center-contents">
            Contact us
          </Link>
          {/* Additional buttons */}
          {children}
        </div>
      </div>
    </div>
  );
}
