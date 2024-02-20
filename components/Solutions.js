import SolutionsGrid from './SolutionsGrid';

export default function Solutions({ solution }) {
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center">Our Solutions</h2>
      <p className="section-subheading text-center">
        Place holder text place holder text lace holder text lace holder text
        lace holder text lace holder text lace holder text lace holder text lace
        holder text lace holder text lace holder text lace holder text lace
        holder text lace holder text lace holder text lace holder text
      </p>
      <SolutionsGrid solution={solution} />
    </div>
  );
}
