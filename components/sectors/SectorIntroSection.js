import SectorSolutionsGrid from '@components/SectorSolutionsGrid';
import OutstandingCareItem from '@components/outstanding-customer-care/OutstandingCareItem';

export default function SectorIntroSection({ sector = 'utilities' }) {
  const sectors = {
    utilities: {
      title: 'Practical Solutions Tailored for Utility Enterprises',
      blurb:
        'Most of the Clyde Ventures team have their roots in the Utility sector, we understand the operation at its foundation enabling us to tailor solutions to your needs. Partnering with us grants you access to a team of seasoned professionals, adept at crafting systems that harmonise with meeting the challenges of a modern Utility company.',
      industryPainpoints: [
        'reducing-operating-costs-to-improve-retail-margin',
        'optimising-wacc-returns-in-regulated-utilities',
        'decarbonisation-and-sustainability',
        'treating-customers-fairly-and-managing-vulnerability',
        'improving-customer-service',
      ],
    },
    'professional-services': {
      title:
        'Practical Solutions Tailored for Professional Services Enterprises',
      blurb:
        "Elevate your professional services enterprise with tailored solutions designed to tackle the industry's most pressing challenges. At Clyde Ventures, we understand the intricacies of client acquisition and retention, the regulatory complexities, and the imperative of embracing technological innovation. Our comprehensive approach combines industry expertise with innovative strategies to help your business thrive in today's dynamic landscape.",
      industryPainpoints: [
        'reducing-operating-costs-to-improve-retail-margin',
        'optimising-wacc-returns-in-regulated-utilities',
        'decarbonisation-and-sustainability',
        'treating-customers-fairly-and-managing-vulnerability',
        'improving-customer-service',
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
        <h2 className="section-heading">Clyde Ventures Utility Solutions</h2>
        <br />
        <SectorSolutionsGrid solution={sector} />
      </div>
    </>
  );
}
