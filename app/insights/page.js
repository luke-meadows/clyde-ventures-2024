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

export default function page() {
  const insightCards = [
    {
      insightId: '1',
      thumbnail: Insight1Image,
      title: 'Energy: How suppliers can improve customer experience',
      date: '29/11/2023',
      author: 'Kerry Moran',
      url: 'insights/consumer-standards',
      tags: ['Energy', 'Consumer Standards', 'Customer Experience'],
    },
    {
      insightId: '2',
      thumbnail: Insight2Image,
      title:
        '£1.95M in domestic sales benefits without the need for technology investment',
      date: '01/12/2023',
      author: 'Amber Morton',
      url: 'insights/domestic-sales',
      tags: ['Revenue Generation', 'Customer Experience'],
    },
    {
      insightId: '3',
      thumbnail: Insight3Image,
      title:
        'For Utility companies, understanding the value of your debt is key',
      date: '06/12/2023',
      author: 'Ross Bern',
      url: 'insights/debt-value',
      tags: ['Utilities', 'Debt'],
    },
    {
      insightId: '4',
      thumbnail: Insight4Image,
      title:
        'Energy Retailers: Delivering a trusted service whilst managing OPEX pressures',
      date: '18/12/2023',
      author: 'Kerry Moran',
      url: 'insights/opex-pressures',
      tags: ['Utilities', 'OPEX', 'Energy', 'Consumer Standards'],
    },
    {
      insightId: '5',
      thumbnail: Insight5Image,
      title: 'Energy Retailers: Addressing the Debt Trilemma',
      date: '08/01/2024',
      author: 'Kerry Moran',
      url: 'insights/debt-trilemma',
      tags: ['Utilities', 'Debt', 'Energy'],
    },
    {
      insightId: '6',
      thumbnail: Insight6Image,
      title:
        'Energy Retailers: Elevating service standards while controlling downside risk to margin',
      date: '11/01/2024',
      author: 'Kerry Moran',
      url: 'insights/service-standards',
      tags: ['Utilities', 'Consumer Standards', 'Energy'],
    },
  ];
  return (
    <AnimationWrapper>
      <MainHero hero="insights" />
      <div className="inner-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr-1 gap-6 h-[100%]">
          {insightCards.map((card, i) => (
            <div key={i} className="rounded overflow-hidden relative">
              <div className="aspect-1 relative">
                <Image src={card.thumbnail} className="h-64 object-cover" />
              </div>
              <div className="px-4 py-4 bg-black  h-full text-white">
                <h5 className="font-semibold text-md mb-1">{card.title}</h5>
                <p className="font-light text-sm mb-2">
                  {card.author} - {card.date}
                </p>
                <Link href={card.url}>
                  <button className="button text-sm">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
