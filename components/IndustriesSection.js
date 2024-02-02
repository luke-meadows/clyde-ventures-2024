import IndustriesSwiper from './IndustriesSwiper';
export default function IndustriesSection() {
  return (
    <div className="">
      <div className="inner-container text-center">
        <h2 className="section-heading">Industries we provide value to</h2>
        <p className="section-subheading ">
          Our CRM consulting and integration service focuses on translating
          complex business processes into efficient, scalable system solutions.
          We leverage the power of the modern CRM to automate processes,
          forecast outcomes and analyse customer data..
        </p>
        <IndustriesSwiper />
      </div>
    </div>
  );
}
