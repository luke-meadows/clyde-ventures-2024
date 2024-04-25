import SolutionsGrid from '@components/SolutionsGrid';
import OutstandingCareItem from '@components/outstanding-customer-care/OutstandingCareItem';

export default function SectorIntroSection({ sector }) {
  const sectors = {
    utilities: {
      title: 'Practical Solutions Tailored for Utility Enterprises',
      blurb:
        'Most of the Clyde Ventures team have their roots in the Utility sector, we understand the operation at its foundation enabling us to tailor solutions to your needs. Partnering with us grants you access to a team of seasoned professionals, adept at crafting systems that harmonise with meeting the challenges of a modern Utility company.',
    },
  };
  return (
    <>
      <div className="inner-container">
        <h2 className="section-heading">{sectors.utilities.title}</h2>
        <p className="section-subheading">{sectors.utilities.blurb}</p>
        <br />
        <h2 className="section-heading">Industry Pain Points</h2>
        <br />
        <div className="grid grid-cols-2 text-left">
          <OutstandingCareItem item="industry" />
          <OutstandingCareItem item="industry" />
          <OutstandingCareItem item="industry" />
          <OutstandingCareItem item="industry" />
        </div>
        <div className="page-break" />
        <h2 className="section-heading">Clyde Ventures Utility Solutions</h2>
        <br />
        <SolutionsGrid solution="salesforce" />
      </div>
    </>
  );
}
