// insight1
import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import ContactSection from '@components/contact/ContactSection';
import AvatarAndDate from '@components/AvatarAndDate';
export const metadata = {
  title: 'Clyde Ventures - Controls & Exception Management Case Study',
  description:
    'Read this case study on how Clyde Ventures developed controls and exception management solutions to enhance business operations.',
};
export default function page() {
  const insightCard = {
    insightId: '3',
    title:
      'Developed a process control and exceptions management framework to facilitate the collection of over £13M in debt.',
    date: '06/12/2023',
    author: 'Ross Bern',
    url: 'case-studies/controls-and-exception-management',
    tags: ['Utilities', 'Debt'],
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
          Our team were engaged by one of the UK&apos;s largest specialists in
          corporate restructuring to support in their task of processing the
          insolvency of a mid-sized energy company in administration. There
          existed a core of customers with complex data issues and legacy data
          inaccuracies who remained unbilled despite the efforts made with the
          CRM/billing providers which was impacting debt recovery success.
          Access to the operational applications was removed midway through the
          process, so any billing had to be done out with the core systems.
        </p>
        <br />
        <h4 className="blog-section-heading">What did we do?</h4>
        <p className="blog-p">
          Clyde Ventures provided a portfolio management team, an exception
          management team and a debt management team to:{' '}
        </p>
        <br />
        <ul className="font-normal flex flex-col gap-2">
          <li>
            Quantify and segment unbilled value and aged debt to enable key
            workstreams to be developed and prioritised.
          </li>
          <li>
            Create a CRM and billing engine to enable bulk and individual
            billing given the legacy systems had been removed.
          </li>
          <li>
            Release the remaining 7k bills for previously unbillable accounts
            characterised by legacy migration issues, high complexity or
            limitations in the legacy billing systems.
          </li>
          <li>
            Facilitate Debt collection activity for legacy and current balances.
          </li>
        </ul>
        <br />
        <h4 className="blog-section-heading">Benefits Realised</h4>
        <ul className="font-normal flex flex-col gap-2">
          <li>
            Visibility was created for the portfolio and surfaced via regular
            reporting and dashboards, giving a live view of outstanding
            exceptions, and the value they represented.{' '}
          </li>
          <li>
            Legacy billing exceptions were managed for the portfolio across both
            brands resulting in unbilled clearance for nearly 7k customers with
            complex issues.{' '}
          </li>
          <li>
            This, along with the unbilled workstreams processed prior to the
            administration, facilitated the collection of over £13.3m of debt.{' '}
          </li>
          <li>
            The technical solutions were transferred to our client so they could
            continue to action queries and resolve legacy issues post
            engagement.
          </li>
        </ul>
        <br />
        <p className="blog-p">
          With our combination of data expertise and thorough understanding of
          billing systems, Clyde Ventures can help you improve your billed
          position and unlock revenue.
        </p>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
