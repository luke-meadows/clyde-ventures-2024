// insight1
import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import ContactSection from '@components/contact/ContactSection';
import AvatarAndDate from '@components/AvatarAndDate';

export const metadata = {
  title: 'Clyde Ventures - Target Operating Model Case Study',
  description:
    'Read this case study on how Clyde Ventures developed and implemented a target operating model to improve business performance.',
};
export default function page() {
  const insightCard = {
    insightId: '6',
    title:
      'Implemented operational excellence and developed a new Target Operating Model to reduce headcount by 25%.',
    date: '11/01/2024',
    author: 'Kerry Moran',
    url: 'case-studies/target-operating-model',
    tags: ['Utilities', 'Consumer Standards', 'Energy'],
  };
  return (
    <AnimationWrapper>
      <MainHero hero="case-study">
        <h1 className="hero-title-2">Case Study: {insightCard.title}</h1>
      </MainHero>
      <div className="inner-container">
        <AvatarAndDate
          author={insightCard.author}
          date={insightCard.date}
          color="black"
        />
        <br />
        <h4 className="blog-section-heading">Background</h4>
        <p className="blog-p">
          Our client, a U.K wide fuel distributor, was running an inefficient
          operation which was top heavy with management and laden with disparate
          processes and unnecessarily high operating costs. This was a factor in
          an underperforming sales operation and dissatisfied customers and
          staff. We were engaged to assess the current design operation with the
          view of designing an optimal target operating model to facilitate
          growth while reducing Opex.
        </p>

        <br />
        <h4 className="blog-section-heading">What did we do?</h4>
        <ul className="font-normal">
          <li>
            We conducted discovery to establish the clients business strategy,
            &lsquo;as-is&rsquo; operating model and used this to shape
            recommendations on what the target operating model should look like
            To examine the current operating model, we divided it into 4 main
            sections:
          </li>
          <ul className="ml-12 py-2">
            <li>
              <strong>Process</strong> What processes and activities are
              currently in place and how do they operate?
            </li>
            <li>
              <strong> Organisation </strong>
              How does the business currently organise its employees and how do
              those employees collaborate and work together?
            </li>
            <li>
              <strong>Technology </strong>
              What technology does the business currently rely in order to carry
              out its processes? How does the use of these technologies impact
              the business?
            </li>
            <li>
              <strong>Data & Information </strong>What Data and Information does
              the business have access to? How can that data be used to draw
              insights and improve visibility of operations?
            </li>
          </ul>
          <li>
            Our team used a range of techniques to gather the required
            information of the current operating model such as Stakeholder maps,
            manager Interviews, advisor Interviews, Workshops, business data
            analysis, site visits and call listening. We then synthesised this
            information and insight to determine the key pain points in the
            operation.
          </li>
          <li>
            We designed innovative solutions to these pain points and made our
            recommendations based on impact assessment vs ease of
            implementation.
          </li>
        </ul>
        {/* BREAK */}
        <br />
        <h4 className="blog-section-heading">Benefits Realised</h4>
        <ul className="font-normal">
          <li>
            We identified an opportunity to reduce headcount by 10% through the
            target operating model through improved spans of control and
            redesigning role activities
          </li>
          <li>
            Further opportunity to reduce headcount by 15% via increasing
            standardisation a reduction in failure demand by 20% and 15%
            increase in FCR with no increase to AHT.
          </li>
        </ul>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
