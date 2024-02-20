import OutstandingCareItem from './outstanding-customer-care/OutstandingCareItem';

export default function WhyChooseClyde({ title }) {
  return (
    <div className="inner-container">
      <h2 className="section-heading">{title}</h2>
      <p className="section-subheading">
        Place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text place.
      </p>
      <div className="grid grid-cols-2">
        <OutstandingCareItem />
        <OutstandingCareItem />
        <OutstandingCareItem />
        <OutstandingCareItem />
      </div>
    </div>
  );
}
