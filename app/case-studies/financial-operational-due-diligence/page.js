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
    insightId: '6',
    title:
      "Conducted financial and operational due diligence on a technology led, energy retailer to provide assurance to support our client's proposed $20m investment.",
    date: '11/01/2024',
    author: 'Ross Bern',
    url: 'case-studies/financial-operational-due-diligence',
    tags: ['Utilities', 'Consumer Standards', 'Energy'],
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
          Clyde Ventures were approached by a global Technology provider to
          undertake financial and operational due diligence on a prospective
          investment target. Over a two week engagement we were able to provide
          the necessary assurance and recommended risk mitigation actions to
          enable the client to proceed with their investment by:
        </p>
        <br />
        <ul className="font-normal flex flex-col gap-2">
          <li>
            Creating cash flow models and developing various scenarios to stress
            test the seller&apos;s assumptions
          </li>
          <li>
            Analysing the company&apos;s management accounts and forecasts to
            produce financial performance metrics
          </li>
          <li>
            Critiquing the viability of the business model and the
            transferability of the associated Technology across different
            continents
          </li>
          <li>
            Conducting peer group analysis and reviewed operational performance
            against industry benchmarks
          </li>
          <li>
            Challenging the current hedging strategies and proposing a number of
            interventions to mitigate investment risk
          </li>
          <li>
            Critiquing the validity of the seller&apos;s customer unit economics
            and lifetime value projections
          </li>
          <li>
            Ultimately producing a company valuation and a clear recommendation
            to enable the client to proceed with their investment
          </li>
        </ul>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
