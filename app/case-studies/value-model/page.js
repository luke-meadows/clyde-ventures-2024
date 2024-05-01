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
    insightId: '5',
    title:
      'Developed a value model linking operational activities to optimise regulatory outcome delivery incentives.',
    date: '08/01/2024',
    author: 'David Philipson',
    url: 'case-studies/value-model',
    tags: ['Utilities', 'Debt', 'Energy'],
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
          Our client provides leading utilities across the world with innovative
          cleantech solutions. Working with some of the world&apos;s biggest
          energy and water companies, as well as innovative challenger brands,
          they help companies reshape what it means to be a utilities business.
          They have been unsuccessful in breaking into the UK water retail
          market as their proposition didn&apos;t resonate with the operational
          and strategic considerations of potential customers by linking the
          product to Outcome Delivery Incentives and PR24 Price Control.
        </p>
        <br />
        <h4 className="blog-section-heading">What did we do?</h4>
        <ul className="font-normal flex flex-col gap-2">
          <li>
            Water industry and Outcome Delivery Incentive training documentation
            generated with recommendations, referencing as-is CRM functionality,
            and future state roadmap Assessments and recommendations for changes
            to existing processes produced, to align to the operational
            requirement of potential customers.{' '}
          </li>

          <li>
            Workflows and journeys created for key processes in deployable
            modules to support operational processes.{' '}
          </li>

          <li>
            Functionality and sales briefs created for each workflow developed
            to support demonstrations and upskilling of sales resource.{' '}
          </li>

          <li>
            Key stakeholder engagement progressed, highlighting key areas of
            importance in the water industry.{' '}
          </li>
        </ul>
        <br />
        <h4 className="blog-section-heading">Benefits Realised</h4>

        <p className="blog-p">
          Greater clarity of the ongoing strategy was created at executive level
          along with improved product development direction. The value risk and
          return model was surfaced to enhance understanding of how to
          communicate product value. The product was enhanced for the current
          market strategy, with components that can be readily modified for
          other markets and utilities. Concurrently, the current and in
          development functionality was tied back to Outcome Delivery Incentives
          and value model in a way that sales strategy can be more easily
          customised for each prospective customer. The value model was
          demonstrated to key stakeholders tied back to the functionality
          created, giving a clearer understanding of how the roadmap can be
          developed to highlight value to prospective customers.
        </p>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
