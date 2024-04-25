import IndustriesSwiper from './IndustriesSwiper';
export default function IndustriesSection() {
  return (
    <div className="">
      <div className="inner-container ">
        <h2 className="section-heading">Sectors</h2>
        <p className="section-subheading ">
          Discover how Clyde Ventures serves a diverse range of sectors with
          tailored solutions and expert consultancy. From technology-driven
          Salesforce implementations to strategic guidance in sustainable
          energy, we partner with industries spanning utilities, professional
          services, education, and more. Explore how we empower businesses
          across sectors to thrive and succeed in today's competitive landscape.
        </p>
        <IndustriesSwiper />
      </div>
    </div>
  );
}
