import Link from 'next/link';
export default function InfoBox({ infobox }) {
  const infoboxes = {
    'integration-crm': {
      title: '',
      subtitle: '',
      button: 'contact',
    },
  };
  return (
    <div className="inner-container text-center">
      <div className="p-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black-text text-white card-rounding">
        <h2 className="text-4xl mb-6 font-semibold">
          Clyde Ventures - your Salesforce integration partner
        </h2>
        <p className="text-md mb-4 font-normal">
          Our Sales Cloud CRM integration service focuses on translating complex
          business processes into efficient, scalable system solutions. We
          leverage the power of the modern CRM to automate processes, forecast
          outcomes and analyse customer data.
        </p>
        <p className="text-md mb-6 font-normal">
          In today&apos;s economy, the significance of customer data cannot be
          overstated. Managing customer data fuels targeted marketing,
          personalised services, and strategic decision-making. Our consultants
          are highly skilled and experienced in helping businesses make the most
          of a Salesforce CRM, assisting with implementation, integration,
          customisation, and administration.
        </p>
        <Link href="/" className="button py-3 center-contents w-fit mx-auto">
          Contact us
        </Link>
      </div>
    </div>
  );
}
