// insight3
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
import AvatarAndDate from '@components/AvatarAndDate';
export const metadata = {
  title: 'Clyde Ventures - Insights on Debt Value',
  description:
    'Read our latest insights on debt value, exploring the complexities and opportunities in managing debt effectively.',
};
export default function page() {
  const insightCard = {
    insightId: '3',
    thumbnail: Insight3Image,
    title: 'For Utility companies, understanding the value of your debt is key',
    date: '06/12/2023',
    author: 'Ross Bern',
    url: 'insights/debt-value',
    tags: ['Utilities', 'Debt'],
  };
  return (
    <AnimationWrapper>
      <MainHero hero="debt-value" />
      <div className="inner-container">
        <AvatarAndDate
          author={insightCard.author}
          date={insightCard.date}
          color="black"
        />
        <br />
        <h2 className="blog-title">
          For Utility companies, understanding the value of your debt is key.
        </h2>
        <br />
        <p className="blog-p">
          Do you know the value of your Debt? Although debt is an asset on the
          balance sheet, too much customer debt is a serious indicator of
          technical and operational challenges.
        </p>
        <p className="blog-p">
          Utility companies face the further challenge of driving debt
          collection in a sector that is known to have data issues, exacerbated
          by historical billing system migrations and poor collection rates
          relating to aged debt.
        </p>
        <p className="blog-p">
          We supported a client to unlock the potential in their debt book using
          our data skills and industry knowledge.
        </p>
        <br />
        <h4 className="blog-section-heading">Background</h4>
        <p className="blog-p">
          In August 2023, our data analysts were engaged by a UK Water retailer
          to estimate the amount of debt related to leakage, to segment their
          aged debt portfolio by debt age, and to suggest an enduring method of
          dealing with suspected leakage. At the start of the engagement, our
          client was intending to proceed with a pence-in-the-pound debt sale
          for its entire aged debt portfolio; the best offer on the table at
          that time was not attractive.
        </p>
        <p className="blog-p">
          Using our data modelling expertise alongside our deep industry
          knowledge of the retail and wholesale arrangements in the UK water
          market, the Clyde Ventures team was able to devise a new strategy for
          the aged portfolio which would maximise returns.
        </p>
        <br />
        <h4 className="blog-section-heading">We quickly identified that:</h4>
        <ul className="mt-4 font-normal">
          <li>
            Although the value of debt due to leakage had been overstated, the
            overstatement was not as large as our client had initially feared –
            the Clyde Ventures team was able to give a confident estimate of 6%
            overstatement, a considerable reduction of our client&apos;s own
            initial in-house estimate of 30%.
          </li>
          <br />
          <li>
            20% of closed accounts were linked to active customer accounts.
          </li>
          <br />
          <li>
            The current thresholds used to detect high consumption / potential
            leakage had been set too high – leading to opportunities for early
            investigation being missed.
          </li>
        </ul>
        <br />
        <h4 className="blog-section-heading">What did we do?</h4>
        <p className="blog-p">
          Based on our findings we delivered in three main areas for our client:
          our revised segmentation of the debt file recommended new debt
          collection strategies; our leakage detection algorithm reduced the
          amount of debt that would need to be written off as potentially due to
          leakage; and, our leak validation analysis suggested that high
          consumption / potential leakage thresholds should be revised downwards
          by 20%.
        </p>
        <br />
        <p className="blog-p">In our 8-week engagement we:</p>
        <ul className="mt-4 font-normal">
          <li>
            Improved historical data by splicing reading data into invoice data
            - information which had been lost during migration.
          </li>
          <br />
          <li>
            Improved the data quality of the debt file with the aim of reducing
            customer queries and improving collection rates.
          </li>
          <br />
          <li>
            Revised the leak detection / high consumption thresholds implemented
            in the new billing software to allow earlier detection of leakage.
          </li>
          <br />
          <li>
            Re-segmented the accounts allowing an additional 18% of the
            portfolio to undergo collection activity.{' '}
          </li>
          <br />
          <li>
            Delivered a fully segmented debt portfolio with distinct collection
            approaches recommended for each segment.
          </li>
        </ul>
        <br />
        <p className="blog-p">
          From our approach it emerged that an uplift of potentially £2.3m was
          available to our client, representing a potential £2m improvement on
          their initial strategy of proceeding with a pence-in-the-pound sale.
        </p>
        <br />
        <p className="blog-p">
          With our combination of data expertise, very thorough understanding of
          utilities customer and billing data gained over many years, and our
          operational experience of managing collections and recoveries, Clyde
          Ventures can help you to unlock the potential of your debt: with Clyde
          Ventures, you&apos;ll know the value of your debt.
        </p>
        <br />
        {/* Bottom */}
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
