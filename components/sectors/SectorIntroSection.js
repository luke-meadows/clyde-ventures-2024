import SectorSolutionsGrid from '@components/SectorSolutionsGrid';
import OutstandingCareItem from '@components/outstanding-customer-care/OutstandingCareItem';

export default function SectorIntroSection({ sector = 'utilities' }) {
  const sectors = {
    utilities: {
      header: 'Utility',
      title: 'Practical Solutions Tailored for Utility Enterprises',
      blurb:
        'At Clyde Ventures, we pride ourselves on being operational and industry experts as opposed to career consultants. Most of our team have held senior positions across the supply chain in Water, Energy, and Distribution, bringing unparalleled industry knowledge and insight to our clients. Our deep expertise within the complex regulatory landscape, market dynamics, and technological advancements shaping the UK utilities sector places us in a unique position to support our clients achieve their objectives. We provide tailored solutions that drive tangible results, aiding clients and the sector as a whole, tackling a host of challenges from regulatory compliance to sustainability initiatives and digital transformation. ',
      industryPainpoints: [
        'reducing-operating-costs-to-improve-retail-margin',
        'optimising-wacc-returns-in-regulated-utilities',
        'treating-customers-fairly-and-managing-vulnerability',
        'improving-customer-service',
        'debt',
        'decarbonisation-and-sustainability',
      ],
    },
    'professional-services': {
      header: 'Professional Services',
      title: 'Solutions Tailored for Professional Services Enterprises',
      blurb:
        "Elevate your professional services enterprise with tailored solutions designed to tackle the industry's most pressing challenges. At Clyde Ventures, we understand the intricacies of client acquisition and retention, the regulatory complexities, and the imperative of embracing technological innovation. Our comprehensive approach combines industry expertise with innovative strategies to help your business thrive in today's dynamic landscape.",
      industryPainpoints: [
        'technology-adoption-and-innovation',
        'client-acquisition-and-retention',
        'regulatory-compliance',
      ],
    },
    technology: {
      header: 'Technology',
      title: 'Solutions Tailored for Technology Enterprises',
      blurb:
        'Unlock your potential in the Technology sector. From harnessing emerging technologies to streamlining operations, we empower tech enterprises to thrive in a rapidly evolving landscape. Discover how our tailored strategies propel innovation and drive success in the digital age.',
      industryPainpoints: [
        'regulatory-compliance-technology',
        'environmental-sustainability',
        'workforce-diversity-and-inclusion',
      ],
    },
  };

  return (
    <>
      <div className="inner-container">
        <h2 className="section-heading">{sectors[sector]?.title}</h2>
        <p className="text-base mb-12 font-normal">{sectors[sector]?.blurb}</p>
        <h2 className="section-heading">Industry Pain Points</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-6">
          {sectors[sector].industryPainpoints.map((point, i) => (
            <OutstandingCareItem key={i} item={point} />
          ))}
        </div>
        <div className="page-break" />
        <h2 className="section-heading">
          Clyde Ventures {sectors[sector]?.header} Solutions
        </h2>
        <br />
      </div>
      <div className="max-w-[1300px] mx-auto md:px-8">
        <SectorSolutionsGrid solution={sector} />
      </div>
    </>
  );
}
