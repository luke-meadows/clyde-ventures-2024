import BackgroundImage from './BackgroundImage';
import HeroNavigationStrip from './HeroNavigationStrip';
import HeroWrapper from './HeroWrapper';

export default function MainHero({ children, hero }) {
  const heroData = {
    services: {
      image: '/images/hero/integration.jpg',
      title: 'Services',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    integration: {
      image: '/images/hero/integration.jpg',
      title: 'Integration',
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
        "We are a leading Salesforce integrator and Salesforce Partner that chooses to integrate Salesforce as the preferred CRM solution for its clients due to Salesforce's unparalleled capabilities in centralising customer data, providing valuable insights, enhancing customer service efficiency, automating processes, ensuring scalability, enabling customisation and integration, offering mobile accessibility, and prioritising security and compliance.",
    },
    'process-design': {
      image: '/images/hero/process-design.jpg',
      title: 'Organisational Effectiveness and Product Development',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'wacc-outperformance': {
      image: '/images/hero/wacc-outperformance.jpg',
      title: 'WACC Outperformance',
      subtitle:
        'Clyde Ventures are particularly adept in helping Regulated Network Operators optimise their WACC returns through targeted process improvement and asset optimisation that drive up performance across all of their lagging outcome delivery incentives.',
    },
    'independence-upskilling-and-design-authority': {
      image: '/images/hero/wacc-outperformance.jpg',
      title: 'Independence, Upskilling and Design Authority',
      subtitle:
        'At Clyde Ventures, we have no wish to create a scenario where our clients are continually dependent on us. We believe that ensuring our clients are capable of self-serving will lead to them returning because they want to; not because they have to. We ensure that we upskill our clients and we also offer to support assessment of design and delivery that other integrators have carried out as we understand that, sometimes a client does not have sufficient internal skillset to make these assessments.',
    },
    'top-line-growth': {
      image: '/images/hero/top-line-growth.jpg',
      title: 'Top Line Growth',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'service-excellence': {
      image: '/images/hero/service-excellence.jpg',
      title: 'Service Excellence',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'opex-optimisation': {
      image: '/images/hero/opex-optimisation.jpg',
      title: 'Opex Optimisation',
      subtitle:
        'Clyde Ventures can help you reduce your Operational expenditure in numerous ways. Leveraging Lean sigma to reduce waste, re-designing processes to be more efficient, improving end-to-end connectivity across supply chains using big data and harnessing the power of RPA and AI to work smarter, we have cuts our Clients’ costs without compromising quality or customer experience.',
    },
    'business-and-culture-change': {
      image: '/images/hero/business-and-culture-change.jpg',
      title: 'Business and Culture Change',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    'about-us': {
      image: '/images/hero/business-and-culture-change.jpg',
      title: 'About Clyde Ventures',
      subtitle:
        'Born from operations. Our team comes from multiple sectors and have delivered large scale project transformations and tangible value.',
    },
    'meet-the-team': {
      image: '/images/hero/business-and-culture-change.jpg',
      title: 'Meet the Team',
      subtitle:
        "Get to know us and learn what we're about. We are serious about our work and love to get stuck into a challenge.",
    },
    insights: {
      image: '/images/hero/top-line-growth.jpg',
      title: 'Business Insights',
      subtitle:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
    },
    consultancy: {
      image: '/images/hero/top-line-growth.jpg',
      title: 'Consultancy',
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
