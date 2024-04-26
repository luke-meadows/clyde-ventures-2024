import AnimationWrapper from '@components/AnimationWrapper';
import AvatarAndDate from '@components/AvatarAndDate';
import MainHero from '@components/MainHero';
import ContactForm from '@components/contact/ContactForm';
import ContactSection from '@components/contact/ContactSection';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const insightCards = [
    {
      insightId: '1',
      title:
        'Reduced unbilled debt resulting in collections uplift of £20m over 18 months.',
      date: '29/11/2023',
      author: 'Graham Mathie',
      url: 'case-studies/unbilled-debt',
      tags: ['Energy', 'Consumer Standards', 'Customer Experience'],
    },
    {
      insightId: '2',
      title:
        'Confirmed the level of debt associated with leakage and segmented the cleansed portfolio to deliver a £2m upside.',
      date: '01/12/2023',
      author: 'Ross Bern',
      url: 'insights/debt-value',
      tags: ['Revenue Generation', 'Customer Experience'],
    },
    {
      insightId: '3',
      title:
        'Developed a process control and exceptions management framework to facilitate the collection of over £13M in debt.',
      date: '06/12/2023',
      author: 'Ross Bern',
      url: 'case-studies/controls-and-exception-management',
      tags: ['Utilities', 'Debt'],
    },
    {
      insightId: '4',
      title:
        "Conducted a LEAN review across a client's operations to deliver £1.95M in benefits.",
      date: '18/12/2023',
      author: 'Amber Morton',
      url: 'insights/domestic-sales',
      tags: ['Utilities', 'OPEX', 'Energy', 'Consumer Standards'],
    },
    {
      insightId: '5',
      title:
        'Developed a value model linking operational activities to optimise regulatory outcome delivery incentives.',
      date: '08/01/2024',
      author: 'David Philipson',
      url: 'case-studies/value-model',
      tags: ['Utilities', 'Debt', 'Energy'],
    },
    {
      insightId: '6',
      title:
        'Implemented operational excellence and developed a new Target Operating Model to reduce headcount by 25%.',
      date: '11/01/2024',
      author: 'Kerry Moran',
      url: 'case-studies/target-operating-model',
      tags: ['Utilities', 'Consumer Standards', 'Energy'],
    },
    {
      insightId: '6',
      title:
        "Conducted financial and operational due diligence on a technology led, energy retailer to provide assurance to support our client's proposed $20m investment.",
      date: '11/01/2024',
      author: 'Ross Bern',
      url: 'case-studies/financial-operational-due-diligence',
      tags: ['Utilities', 'Consumer Standards', 'Energy'],
    },
  ];
  return (
    <AnimationWrapper>
      <MainHero hero="case-studies" />
      <div className="inner-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr-1 gap-6 h-[100%]">
          {insightCards.map((card, i) => (
            <div key={i} className="rounded overflow-hidden relative bg-black ">
              <div className="px-4 py-4  h-full text-white flex flex-col justify-between">
                <div>
                  <AvatarAndDate
                    author={card.author}
                    date={card.date}
                    color="white"
                  />

                  <h5 className="font-semibold text-md mb-3">{card.title}</h5>
                </div>
                <Link href={card.url}>
                  <button className="button text-sm w-fit">Read More</button>
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
