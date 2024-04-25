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
        'Clyde Ventures’ mission is to create social mobility by delivering top line growth for our clients. We teach people how to fish in new waters using the following range of solutions',
    },
    'service-excellence': {
      image: '/images/hero/service-excellence.jpg',
      title: 'Service Excellence',
      subtitle:
        'Born from operations, our expertise lies in understanding customer needs and preferences, optimising processes, and implementing innovative strategies to enhance the overall customer experience. Through analysis of customer touchpoints, we identify areas for improvement and develop tailored solutions to address pain points and elevate satisfaction levels. With our guidance and support, our clients transform their service operations to cultivate enduring relationships with their customers, driving loyalty, advocacy, and sustainable business growth.',
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
        'At Clyde Ventures we excel at driving business transformation and culture change for our clients. Using proven methodologies and our unique toolkit, our specialty lies in aligning strategic goals with your cultural values, ensuring engagement and adoption at every level. Our expertise and customer solutions help to empower your organisation to navigate transitions seamlessly, fostering sustainable growth and a culture of continuous improvement.',
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
    utilities: {
      image: '/images/hero/top-line-growth.jpg',
      title: 'Utilities',
      subtitle:
        "Discover Clyde Ventures' custom solutions for the utilities sector, enhancing compliance and efficiency to propel your business forward.",
    },
    'case-studies': {
      image: '/images/hero/process-design.jpg',
      title: 'Case Studies',
      subtitle:
        "Discover Clyde Ventures' custom solutions for the utilities sector, enhancing compliance and efficiency to propel your business forward.",
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
