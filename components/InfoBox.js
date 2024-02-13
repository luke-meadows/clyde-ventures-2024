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
        'Our Sales Cloud CRM integration service focuses on translating complex business processes into efficient, scalable system solutions. We leverage the power of the modern CRM to automate processes, forecast outcomes and analyse customer data.',
        "  In today's economy, the significance of customer data cannot be overstated. Managing customer data fuels targeted marketing, personalised services, and strategic decision-making. Our consultants are highly skilled and experienced in helping  businesses make the most of a Salesforce CRM, assisting with implementation, integration, customisation, and administration.",
      ],
    },
    'service-cloud': {
      title: 'Service Cloud',
      subtitle: [
        'Clyde Ventures stands out as an ideal partner for a Service Cloud integration due to its background rooted in operational experience. Born from the trenches of industry operations, the team at Clyde Ventures possesses an intimate understanding of the challenges faced by frontline workers and the complexities of delivering exceptional customer service.',
        'With first hand experience working in service based environments, we bring a rare perspective to Salesforce integration projects, ensuring solutions are not just technically sound but also deeply attuned to the practical needs and pain points of end-users.',
      ],
    },
    mba: {
      title: 'Proudly Partnered With Strathclyde University',
      subtitle: [
        'Clyde Ventures takes immense pride in its partnership with Strathclyde University Business School, collaborating to offer an MBA in Sustainable Energy Futures. This program represents a unique fusion of industry expertise and academic excellence, aimed at addressing the dynamic challenges and opportunities within the energy sector.',
        'By bringing together seasoned industry leaders and renowned academics, the MBA fosters an environment conducive to robust discussions and innovative solutions, empowering professionals to navigate economic shifts, public sentiments, technological advancements, and regulatory landscapes effectively.',
        'Clyde Ventures is committed to supporting this visionary program, recognising its potential to drive tangible impact and shape the future of sustainable energy.',
      ],
    },
  };
  const { title, subtitle } = infoboxes[infobox];
  return (
    <div className="inner-container text-center">
      <div className="p-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black-text text-white card-rounding">
        <h2 className="text-4xl mb-6 font-semibold">{title}</h2>
        {subtitle.map((p, i) => (
          <p key={i} className="text-md mb-4 font-normal">
            {p}
          </p>
        ))}
        <div className="flex gap-6 items-center mt-[25px] mx-auto w-fit">
          <Link href="/contact" className="button py-3 center-contents">
            Contact us
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
