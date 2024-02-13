import BackgroundImage from './BackgroundImage';
import HeroNavigationStrip from './HeroNavigationStrip';
import HeroWrapper from './HeroWrapper';

export default function MainHero({ children, hero }) {
  const heroData = {
    'salesforce-sales-cloud': {
      image: '/images/hero/integration.jpg',
      title: 'Salesforce: Sales Cloud',
      subtitle:
        'Sales Cloud, developed by Salesforce, is a leading CRM platform offering robust tools for sales automation, lead management, and customer engagement, empowering businesses to streamline processes and drive revenue growth through data-driven decision-making and collaboration.',
    },
    'salesforce-service-cloud': {
      image: '/images/hero/service-cloud.jpg',
      title: 'Salesforce: Service Cloud',
      subtitle:
        'Service Cloud is a customer service platform that empowers businesses to deliver exceptional support experiences across multiple channels. Streamline customer interactions, automate workflows, and gain insights to drive operational efficiency and customer satisfaction.',
    },
    'education-mba': {
      image: '/images/hero/education-mba.jpg',
      title: 'MBA: Sustainable Energy Futures',
      subtitle:
        'The MBA Sustainable Energy Futures program aims to support ambitious and curious individuals in becoming  industry sustainability experts who can drive progress and address these complex issues across the sector.',
    },
    salesforce: {
      image: '/images/hero/salesforce.jpeg',
      title: 'Salesforce',
      subtitle:
        'From initial consultation to final deployment, we excel in crafting tailored solutions that seamlessly integrate with your existing systems and processes. Trust us to navigate the complexities of your Salesforce integration journey, ensuring optimal performance and maximum value for your business.',
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
