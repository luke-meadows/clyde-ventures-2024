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
    title:
      'Reduced unbilled debt resulting in collections uplift of £20m over 18 months.',
    date: '29/11/2023',
    author: 'Graham Mathie',
    url: 'case-studies/unbilled-debt',
    tags: ['Energy', 'Consumer Standards', 'Customer Experience'],
  };
  return (
    <AnimationWrapper>
      <MainHero hero="case-study">
        <h1 className="hero-title">Case Study: {insightCard.title}</h1>
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
          Our client a mid-sized, multi brand Utility company supplying energy
          to 170,000 customers, UK wide, required support to significantly
          decrease the unbilled position across both brand portfolios; an issue
          created by data quality issues and limitations within the CRM and
          billing systems which differed for each brand.
        </p>
        <br />
        <h4 className="blog-section-heading">What did we do?</h4>
        <ul className="font-normal flex flex-col gap-2">
          <li>
            Carried out data reconciliation work to ensure an accurate position
            and to support the accurate categorisation and segmentation of
            customers.
          </li>
          <li>
            Utilised this segmentation to target pots of customers with the most
            appropriate resolution for their root cause.{' '}
          </li>
          <li>
            Full diagnostic conducted using payment, metering, billing, debt and
            complaints data, and subsequent relational assessment to understand
            barriers to billing{' '}
          </li>
          <li>
            Categorisation, segmentation and root cause analysis of entire
            unbilled portfolio, using bulk and individual testing to validate
            findings or support further segmentation.{' '}
          </li>
          <li>
            Implementation of a process for the handling of unbilled with a
            reprioritisation by volumes and values of these segmented pots of
            customers.{' '}
          </li>
          <li>
            Assessment of all systemic rules across both CRMs to see where
            actions can be taken to amend certain parameters, if applicable.{' '}
          </li>
          <li>
            Improved reporting and analytics built out to ensure accountability
            and tracking of progress.{' '}
          </li>
          <li>
            Identification of other areas impacting unbilled position to create
            multiple cross-departmental workstreams (e.g., Erroneous EAC/AQ for
            meter reads, no DD set-up).
          </li>
          <li>
            Management of all related billing concerns and activity with a new
            strategic approach, reprioritising how complaints were handled to
            maximise impact of this approach.{' '}
          </li>
        </ul>
        <br />
        <h4 className="blog-section-heading">Benefits Realised</h4>
        <ul className="font-normal flex flex-col gap-2">
          <li>
            The clearance of £23.3m of unbilled, ensuring the number of accounts
            classed as overdue was less than 7% of the portfolio.
          </li>

          <li>
            The relevant actions that impacted other departments also led to a
            £9.7m increase in revenue through optimisation of direct debit
            reviews (£4.8m), final payment collection processes (£1.9m) and a
            more refined and aligned approach to revenue collection between our
            billing and revenue assurance teams (£2.8m).
          </li>
          <li>
            Improved data quality control framework and portfolio reporting
            providing insight on a plethora of items including billing status,
            COT status, metering detail and debt risk.
          </li>

          <li>
            A more efficient set of parameters and rules within the systems
            aligned to the business values and risk appetite
          </li>
        </ul>
        <br />
        <p className="blog-p">
          With our combination of data expertise, thorough understanding of
          utilities customer and billing data gained over many years, Clyde
          Ventures can help you to transform your billing operation unlocking
          potential revenue and minimising regulatory risk.
        </p>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
