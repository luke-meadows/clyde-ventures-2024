import BackgroundImage from './BackgroundImage';
import HeroNavigationStrip from './HeroNavigationStrip';
import HeroWrapper from './HeroWrapper';

export default function MainHero({ children, hero }) {
  const heroData = {
    'salesforce-sales-cloud': {
      image: '/images/hero/integration.jpg',
      title: 'Salesforce: Sales Cloud',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'salesforce-service-cloud': {
      image: '/images/hero/service-cloud.jpg',
      title: 'Salesforce: Service Cloud',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'education-mba': {
      image: '/images/hero/education-mba.jpg',
      title: 'MBA: Sustainable Energy Futures',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    salesforce: {
      image: '/images/hero/salesforce.jpeg',
      title: 'Salesforce',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'process-design': {
      image: '/images/hero/process-design.jpg',
      title: 'Process Design',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'wacc-outperformance': {
      image: '/images/hero/wacc-outperformance.jpg',
      title: 'WACC Outperformance',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'independence-upskilling-and-design-authority': {
      image: '/images/hero/wacc-outperformance.jpg',
      title: 'Independence, Upskilling and Design Authority',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
  };

  const { title, subtitle, image } = heroData[hero];
  return (
    <HeroWrapper>
      <HeroNavigationStrip />
      <div className="h-[350px] relative">
        <div className="hero-inner-container">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle max-w-[80%]">{subtitle}</p>
          {/* Space for other elements tacked on the bottom of hero if required */}
          {children}
        </div>
        <BackgroundImage image={image} />
      </div>
    </HeroWrapper>
  );
}
