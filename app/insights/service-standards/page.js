// insight6
import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import Graphic1 from '@public/images/blog-images/blog-service-standards/EBIT blog 2 graphic.png';
import Graphic2 from '@public/images/blog-images/blog-service-standards/model-supplier-chart.png';
import Graphic3 from '@public/images/blog-images/blog-service-standards/highest-supplier-chart.png';
import Graphic4 from '@public/images/blog-images/blog-service-standards/lowest-supplier-chart.png';
import Insight6Image from '@public/images/blog-images/thumbnail/service-standards-thumbnail.jpg';
import Image from 'next/image';
import ContactSection from '@components/contact/ContactSection';
import AvatarAndDate from '@components/AvatarAndDate';

export default function page() {
  const insightCard = {
    insightId: '6',
    thumbnail: Insight6Image,
    title:
      'Energy Retailers: Elevating service standards while controlling downside risk to margin',
    date: '11/01/2024',
    author: 'Kerry Moran',
    url: 'insights/service-standards',
    tags: ['Utilities', 'Consumer Standards', 'Energy'],
  };
  return (
    <AnimationWrapper>
      <MainHero hero="service-standards" />
      <div className="inner-container">
        <AvatarAndDate
          author={insightCard.author}
          date={insightCard.date}
          color="black"
        />
        <br />
        <h2 className="blog-title">
          Can suppliers deliver an improved service for consumers while
          remaining profitable in current market conditions?
        </h2>
        <br />
        <h4 className="blog-section-heading">The Challenge</h4>
        <p className="blog-p">
          As discussed in an earlier blog in this series, there is an undeniable
          need for marked improvement in the level of service provided across
          the board in the U.K energy sector. Long wait times, substandard
          complaint handling and convoluted processes have all been cited as
          contributing factors to erosion of consumer trust in the sector and
          triggered reform by the regulator. While the customer should be at the
          heart of the drive for improving standards in the provision of service
          there is, or should be, another motivating factor for suppliers to
          transform customer operations – reducing operating costs and in turn
          erosion of already tight margins.
        </p>
        <br />
        <h4 className="blog-section-heading">Margin Erosion - The Reality</h4>
        <p className="blog-p">
          In lieu of innovation in the sector and genuine commitment to change,
          the downside risks to margin within customer operations for a supplier
          is truly unlimited. The provision of service is often where the
          largest margin leakage occurs, with operating costs being the main
          controllable within the cost cap for retailers. In our opening blog of
          the series, we presented analysis that demonstrated a
          &lsquo;model&rsquo; supplier both in terms of efficiency and service
          provision would have margin erosion of approximately 20%, this
          encompassed several downside risks such as external complaint costs,
          back billing and guaranteed standards payments and assumed that all
          external complaints incurred an ombudsman fee and the average goodwill
          cost.
        </p>
        <br />
        <p className="blog-p">
          If we take for example, external complaint costs, the exceptional
          5-star supplier would have 5 complaints per 10,000 customers escalated
          to the ombudsman at a cost of approximately £340 (Full fee) per case,
          naturally this is not accounted for within the operating cost
          methodology and any service failure costs are impacting the bottom
          line- this performance would see 1% margin erosion on external
          complaints management costs alone. The reality is that no supplier is
          currently operating anywhere close to this 5-star performance. Using
          the most recent citizens advice rating we have completed analysis that
          shows, by failing to handle complaints through internal processes:
        </p>
        <br />
        <ul className="font-normal">
          <li>
            The top performing supplier is potentially losing ~3% of margin
          </li>
          <li>
            The lowest performing supplier is potentially losing ~15% of margin{' '}
          </li>
        </ul>
        <br />
        <p className="blog-p">
          This does not account for other complaint associated costs such as
          goodwill payments when complaints are closed internally or cost of
          repeat contact, Table 1.1 and 1.2 outlines the methodology.{' '}
        </p>
        <br />
        <div className="graphic-one-container">
          <Image
            src={Graphic1}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <br />
        <br />
        <h4 className="blog-section-heading">
          External Complaint Margin Erosion
        </h4>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="erosion-image-container">
            <Image src={Graphic2} layout="responsive" objectFit="cover" />
          </div>
          <div className="erosion-image-container">
            <Image src={Graphic3} layout="responsive" objectFit="cover" />
          </div>
          <div className="erosion-image-container">
            <Image src={Graphic4} layout="responsive" objectFit="cover" />
          </div>
        </div>
        <br />
        <p className="blog-p">
          The wholesale gas crisis effectively closed the market for switching,
          this further reduced the levers suppliers could pull to recover margin
          leakage- for context to cover the cost of one single ombudsman
          complaint you would need to acquire c.10 customers not accounting for
          the cost of acquisition itself- therefore, the only real option is to
          transform customer operations to be leaner and truly customer centric
          and this will go a long way in inspiring consumer trust in the
          industry and reducing operating costs to protect margin.{' '}
        </p>
        <br />
        <h4 className="blog-section-heading">Drivers for Transformation </h4>
        <p className="blog-p">
          With the new consumer standards reform stating that suppliers must now
          publish their quarterly CAB rating, there is likely to be increased
          consumer and media interest in levels of performance suppliers are
          delivering. The reputational risk coupled with the gradual reopening
          of the switching market, means it is likely that there will be an
          enhanced strategic focus on performing well in these metrics. The CAB
          service KPI&apos;s of ease of contact and external complaints
          escalation are a good measurement of provision of service as a
          headline but what they don&apos;t recognise are the disparate
          processes, the nuances of the energy sector and fail to give credit to
          the management of the details that deliver top performance in these
          metrics. That is where Clyde Ventures vast operational experience can
          support your transformation, our teams have borne the scars and
          delivered innovative solutions to your problems of today. We
          specialise in achieving this while delivering cost benefit to the
          business through reducing operating costs.
        </p>
        <br />
        <p className="blog-p">
          Effective management of CAB is key, we can support your strategic
          approach to achieving top level bandings both from a &lsquo;mind the
          gap&rsquo; perspective and from an operational transformation
          perspective to deliver exceptional service for your customers and
          begin to build trust in the wider industry.{' '}
        </p>
        <br />
        {/* BREAK */}
        <p className="blog-p">
          For more information on how we can help you reduce your cost while
          transforming your customer operations for excellence, contact Kerry
          Moran or Amber Morton.
        </p>
        <br />
        <a
          href="mailto:Kerry.moran@clydeventures.com"
          target="_blank"
          rel="noreferrer"
          className="blog-link"
        >
          Kerry.moran@clydeventures.com
        </a>
        <br />
        <a
          href="mailto:Amber.morton@clydeventures.com"
          target="_blank"
          rel="noreferrer"
          className="blog-link"
        >
          Amber.morton@clydeventures.com
        </a>
        <br />
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
