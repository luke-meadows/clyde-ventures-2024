// insight2
import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import Insight1Image from '@public/images/blog-images/thumbnail/consumer-standards-thumbnail.jpg';
import Insight2Image from '@public/images/blog-images/thumbnail/domestic-sales-thumbnail.jpg';
import Insight3Image from '@public/images/blog-images/thumbnail/debt-value-thumbnail.jpg';
import Insight4Image from '@public/images/blog-images/thumbnail/opex-thumbnail.jpg';
import Insight5Image from '@public/images/blog-images/thumbnail/debt-trilemma-thumbnail.jpg';
import Insight6Image from '@public/images/blog-images/thumbnail/service-standards-thumbnail.jpg';
import Image from 'next/image';
import ContactSection from '@components/contact/ContactSection';
import Link from 'next/link';
import AvatarAndDate from '@components/AvatarAndDate';

export default function page() {
  const insightCard = {
    insightId: '2',
    thumbnail: Insight2Image,
    title:
      '£1.95M in domestic sales benefits without the need for technology investment',
    date: '01/12/2023',
    author: 'Amber Morton',
    url: 'insights/domestic-sales',
    tags: ['Revenue Generation', 'Customer Experience'],
  };
  return (
    <AnimationWrapper>
      <MainHero hero="domestic-sales" />
      <div className="inner-container">
        <AvatarAndDate
          author={insightCard.author}
          date={insightCard.date}
          color="black"
        />
        <br />
        <h2 className="blog-title">
          Cash is King for all Utility companies and increasing Revenue is the
          fastest way to improve your cash position.
        </h2>
        <br />
        <p className="blog-p">
          We identified £1.95m of benefits opportunity within the Domestic Sales
          function of a UK wide fuel distributor as part of a revenue growth
          programme. Without the need for any technology investment, we
          delivered:
        </p>
        <ul className="mt-4 font-normal">
          <li>Improved call abandonment rate by 13%</li>
          <br />
          <li>Reduced failure demand by 20%</li>
          <br />
          <li>Improved FCR by 15% without adding to AHT</li>
          <br />
          <li>Equivalent of 8 FTE released through capacity creation</li>
        </ul>
        <br />
        <h4 className="blog-section-heading">Background</h4>
        <p className="blog-p">
          We were engaged by a UK wide fuel distributor to support their
          Domestic Sales function to assess their readiness for winter. Cold
          temperatures historically increased customer contact volumes for our
          client across all channels, voice and digital. Managing the demand had
          proven difficult in previous years with a high call abandonment rate
          leading to poor customer experience, missed sales opportunities and a
          challenging working environment for the team.
        </p>
        <br />
        <br />
        <h4 className="blog-section-heading">What did we do?</h4>
        <p className="blog-p">
          We completed an initial deep-dive into the operation and designed data
          and people workstreams to deliver improved customer experience and to
          mitigate the factors that were leading to missed sales opportunities.
          Within the data workstream, we redesigned the call prioritisation and
          routing strategy, which significantly increased call answer rate
          without requiring additional headcount. The operational reporting was
          overhauled to focus on the key metrics to drive quality and
          conversions.
        </p>
        <br />
        <p className="blog-p">
          As our team is born from operations, the focus of the people
          workstream was to deliver the operational toolkit to enable the team
          to self-manage. Our consultancy approach is always to upskill and we
          operate with full transparency in terms of our toolkit and analysis.
          We worked closely with all the People Managers to ensure they were
          proficient in the toolkit.
        </p>
        <br />
        <p className="blog-p">
          We also designed and delivered bespoke Sales training using our
          Commitment based training approach that is grounded in the theories of
          Speech Acts, Language Action and commitment based management. This was
          delivered to the full function over 3 sites and 100% of the employees
          trained confirmed that the new approach would result in an improved
          customer experience, leading to better sales conversations.
        </p>
        <br />
        <br />
        <h4 className="blog-section-heading">The Clyde Ventures Approach</h4>
        <p className="blog-p">
          Our approach is to move with pace and to take the team on the journey
          with us. We delivered the full scope of the Data and People
          workstreams within an 8 week period with measurable benefits delivered
          from week 3 onwards.
        </p>
        <br />
        <p className="blog-p">
          The Sales function has a full toolkit delivered to support them to
          manage peak demand with a better customer experience this year to
          support the delivery of the sales targets and margins.
        </p>
        <br />
        <p className="blog-p">
          The client recognised that not only did we deliver the full scope on
          time and within budget, that everyone we came into contact with
          benefited from our decades of operational experience.
        </p>
        <br />
        <p className="blog-p">
          If you want to discuss how our approach can help you, please contact
          Kerry Moran or Amber Morton.
        </p>
        <br />
        <a
          href="mailto:Kerry.moran@clydeventures.com"
          target="_blank"
          className="text-blue-700 underline"
          rel="noreferrer"
        >
          Kerry.moran@clydeventures.com
        </a>
        <br />
        <a
          href="mailto:Amber.morton@clydeventures.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 underline"
        >
          Amber.morton@clydeventures.com
        </a>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
