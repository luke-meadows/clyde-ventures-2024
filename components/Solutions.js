import SolutionsGrid from './SolutionsGrid';

export default function Solutions({ solution }) {
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center">Our Solutions</h2>
      <p className="section-subheading text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
        cum dolor quam obcaecati facere quo voluptatem vero, nulla enim quis
        quos accusantium iure corporis magnam nisi! Aut unde accusamus tenetur
        debitis omnis deserunt consectetur.
      </p>
      <SolutionsGrid solution={solution} />
    </div>
  );
}
