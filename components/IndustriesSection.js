import IndustriesSwiper from './IndustriesSwiper';
export default function IndustriesSection() {
  return (
    <div className="">
      <div className="inner-container text-center">
        <h2 className="section-heading">Industries we provide value to</h2>
        <p className="section-subheading ">
          Partnering with us means gaining a trusted ally who is deeply invested
          in your industry's specific needs and in driving your success. Explore
          how we bring innovation, efficiency, and unparalleled service to each
          of these sectors.
        </p>
        <IndustriesSwiper />
      </div>
    </div>
  );
}
