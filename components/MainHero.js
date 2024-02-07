import BackgroundImage from './BackgroundImage';
import HeroNavigationStrip from './HeroNavigationStrip';
import HeroWrapper from './HeroWrapper';

export default function MainHero({ children, hero }) {
  const heroData = {
    'integration-crm': {
      image: '/images/hero/integration.jpg',
      title: 'Salesforce: CRM',
      subtitle:
        'We specialise in end-to-end complex implementations We specialise in end-to-end complex implementations. We specialise specialise in end-to-end complex implementations.',
    },
  };

  const { title, subtitle, image } = heroData[hero];
  return (
    <HeroWrapper>
      <HeroNavigationStrip />
      <div className="h-[500px] relative">
        <div className="hero-inner-container">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {/* Space for other elements tacked on the bottom of hero if required */}
          {children}
        </div>
        <BackgroundImage image={image} />
      </div>
    </HeroWrapper>
  );
}
