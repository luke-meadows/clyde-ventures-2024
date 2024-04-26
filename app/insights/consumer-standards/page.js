// insight1
import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import Insight1Image from '@public/images/blog-images/thumbnail/consumer-standards-thumbnail.jpg';
import Image from 'next/image';
import ContactSection from '@components/contact/ContactSection';
import AvatarAndDate from '@components/AvatarAndDate';
import Link from 'next/link';

export default function page() {
  const insightCard = {
    insightId: '1',
    thumbnail: Insight1Image,
    title: 'Energy: How suppliers can improve customer experience',
    date: '29/11/2023',
    author: 'Kerry Moran',
    url: 'insights/consumer-standards-reform',
    tags: ['Energy', 'Consumer Standards', 'Customer Experience'],
  };
  return (
    <AnimationWrapper>
      <MainHero hero="consumer-standards" />
      <div className="inner-container">
        <AvatarAndDate
          author={insightCard.author}
          date={insightCard.date}
          color="black"
        />
        <br />
        <h2 className="blog-title">
          Consumer Standards Reform: What tactical changes can suppliers make to
          improve customer experience in the Energy industry?
        </h2>
        <br />
        <p className="blog-p">
          &lsquo;Energy is the lowest performing sector in the UK for customer
          satisfaction levels&rsquo; as rated by the institute of customer
          service (July 23). A drop of 5.3 points in the last 12-months saw the
          industry earn this undesirable crown. This, coupled with less than
          impressive customer service ratings in the latest publication by
          Citizens Advice (September 2023) in which overall scores ranged from
          1.8-3.7, reinforces the need for a real shake up in consumer standards
          to deliver better outcomes for customers. Ofgem&apos;s decision to
          introduce requirements for suppliers to publish customer service
          ratings provided by Citizens Advice has been at the forefront of
          discussion, and this is unsurprising given the sub-par performance
          across the board.
        </p>
        <br />
        <p className="blog-p">
          Due to be launched mid-December, Ofgem has proposed new rules to
          elevate service standards. Suppliers must adapt and become truly
          customer centric to adhere to these new rules, investing in people and
          processes is key to delivering exceptional service. The Citizen Advice
          ratings and the service areas they represent are important,
          functioning both as performance indicators and a catalyst for change,
          however, to transform customer operations to the levels required to
          rebuild confidence in the ability of the industry to adequately
          service customers, suppliers need to look beyond this scope and take
          practical steps to expedite improvements. Clyde Ventures has
          identified tactical changes suppliers can deploy while developing the
          long-term strategy, to not only be compliant with reform but continue
          the journey to delivering exceptional customer experience.
        </p>
        <br />
        <br />
        <h3 className="blog-subtitle">
          Delivering service improvements in line with licencing changes{' '}
        </h3>
        <br />
        <h4 className="blog-section-heading">First Contact Resolution</h4>
        <p className="blog-p">
          Equipping advisors with the skills and tools to get it right first
          time for your customers is key to transforming your customer
          operations. This can be achieved with targeted training and ensuring
          front line staff are supported with efficient processes to facilitate
          success. Empowering customer facing staff and reducing the need for
          hand-offs are critical in improving first contact resolution and same
          day complaints closure rates. Ofgem&apos;s July 2023 market compliance
          review highlighted concerns in the volume of complaints being upheld
          by the energy ombudsman and given that 12/20 suppliers rated in the
          recent citizens advice publication scored 1/5 stars for the complaints
          metric, this should be a high priority focus area for all suppliers.
          Development of people and changes in behaviour takes time and
          investment to embed, suppliers may consider strengthening cross
          function communication, encouraging live collaboration between
          different departments to facilitate a smoother flow of information
          resulting in increased first contact resolution for your customer.
        </p>
        <br />
        <h4 className="blog-section-heading">Vulnerable Customer Strategy</h4>
        <p className="blog-p">
          Recent changes place focus on ensuring that customers can contact
          their supplier with relative ease and, while this has been a long-term
          metric, there has been a shift to specifically prioritising vulnerable
          customers who require support. It is essential that suppliers adopt an
          approach that encompasses both the practicalities of fulfilling this
          obligation and providing quality support and solutions to this
          customer base. To achieve this, there must be an awareness of
          &lsquo;who&rsquo; these customers are, leveraging data to develop a
          comprehensive view of customers who may be in, or at risk of,
          financial vulnerability. This is key to both offering proactive
          support and communications, and supporting the quality of
          conversations advisors are equipped to have when servicing these
          customers. Providing front line advisors with the training, skills and
          knowledge to manage difficult conversations with care and empathy
          should be a key focus for suppliers this winter, with the newly
          released price cap figures demonstrating the majority of customers
          will be worse off in the first quarter of 2024 in comparison to 2023.
        </p>
        <br />
        <h4 className="blog-section-heading">Process Improvement</h4>
        <p className="blog-p">
          There is no denying the provision of service is complex in utilities.
          Often multiple processes must work together to ensure that both the
          customer and supplier receive a fair outcome. Suppliers must be agile
          and work at pace to overcome issues quickly to prevent negative
          customer impact and ensure satisfaction. With disparate processes,
          industry specific challenges and regulatory constraints this is more
          of a challenge than it initially sounds. Encouraging advisors to do
          the right thing for your customers starts with making this as easy as
          possible, by reviewing your internal processes through the lens of
          your front-line staff and your customers to facilitate improvements
          you will strengthen the confidence levels of advisors and support
          embedding an outcome focused approach. A first tactical step could be
          to utilise automation; identify repetitive and time-consuming tasks
          that can be automated to reduce manual effort and improve
          productivity.
        </p>
        <br />
        <br />
        <h4 className="blog-subtitle">How can we help?</h4>
        <br />
        <p className="blog-p">
          Clyde Ventures are a utilities centric management consultancy and
          salesforce integrator. We are not career consultants; born from
          operations, we understand and have faced your challenges.{' '}
        </p>
        <br />
        <strong>
          <p>We can help you: </p>
        </strong>
        <ul className="mt-4 font-normal">
          <li>
            Support operational teams to assess and rethink how the business
            measures and communicates performance across all layers of
            accountability, strengthening data driven contact centres that
            support decision-making and build an understanding of how to
            effectively manage demand and competing operational pressures to
            deliver industry leading customer contact performance. We are
            experts in designing and supporting implementation of these changes
            in a way that drives change and leads to more engaged and productive
            organisations.
          </li>
          <br />
          <li>
            Develop the customer service skills to deliver excellence. We are a
            consultancy with a difference as we commit to recruiting 90% of our
            staff from the poorest 10% of postcodes. This places us in a unique
            position to design training and conversations that resonate with the
            experience your front-line staff have with customers particularly in
            the current conditions where genuine empathy is required for
            customers with financial vulnerability.
          </li>
          <br />
          <li>
            Tackle your most challenging processes, supporting you in optimising
            and improving underperforming processes that are frustrating your
            advisors and customers. We immerse ourselves in your teams, in a
            non-disruptive manner, to understand your challenges bringing our
            operational expertise and insight to the table. Our approach is to
            operate with full transparency in terms of our toolkit and analysis
            while sharing knowledge and upskilling your internal teams to
            deliver results long after our engagement is completed.
          </li>
        </ul>
        <br />
        <p>
          Read our case study on how we supported a recent client to optimise
          their revenue without the need for investment in new technology{' '}
          <Link
            href="/insights/domestic-sales"
            className="text-blue-700 underline"
          >
            here
          </Link>
          .
        </p>
        <br />
        <p>
          For more information on how we can help you transform your customer
          operations for excellence contact Kerry Moran or Amber Morton.
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
