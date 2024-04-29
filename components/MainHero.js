import BackgroundImage from './BackgroundImage';
import HeroNavigationStrip from './HeroNavigationStrip';
import HeroWrapper from './HeroWrapper';

export default function MainHero({ children, hero }) {
  const heroData = {
    services: {
      image: '/images/hero/integration.jpg',
      title: 'Services',
      subtitle:
        "Discover the power of innovation with Clyde Ventures, your trusted partner in Salesforce and General Consultancy. Elevate your business with our tailored solutions while exploring new horizons in sustainable energy through our promoted MBA program. Let's embark on a journey towards sustainable success together.",
    },
    integration: {
      image: '/images/hero/integration.jpg',
      title: 'Integration',
      subtitle:
        "Empowerment through integration defines Clyde Ventures. As a leading Salesforce integrator and partner, we harness Salesforce's unparalleled capabilities to streamline operations, enhance insights, and prioritise security. Additionally, our expertise extends to optimising WACC returns for Regulated Network Operators. But our commitment doesn't end there. We foster independence and upskill our clients, ensuring self-sufficiency and genuine partnership. ",
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
        'This program in collaboration with industry experts and academics, aims to address industrial challenges faced by organisations striving to achieve Net Zero. As well as equipping business leaders with the tools to tackle these challenges, the course fosters an environment for meaningful discussions that lead to real social impact.',
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
        "Using visionary Product Design, strategic Process Design and cutting-edge Automation & AI, we propel your organisation towards success. Let's shape the future of your business together.",
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
        'Clyde Ventures’ mission is to create social mobility by delivering top line growth for our clients. We teach people how to fish in new waters using the following range of solutions.',
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
        "Explore our Business Insights page for expert analysis, industry trends, and actionable strategies to drive your organisation forward. From Salesforce integration to sustainable energy initiatives, unlock the knowledge you need to thrive in today's dynamic marketplace. Discover the insights that fuel success with Clyde Ventures.",
    },
    consultancy: {
      image: '/images/hero/top-line-growth.jpg',
      title: 'Consultancy',
      subtitle:
        "Empower your business with Clyde Ventures, a leading  Consultancy firm. Explore our innovative strategies tailored to your needs. Together, let's redefine success and drive positive change.",
    },
    utilities: {
      image: '/images/hero/utilities.jpeg',
      title: 'Utilities',
      // subtitle:
      //   "Discover Clyde Ventures' custom solutions for the utilities sector, enhancing compliance and efficiency to propel your business forward.",
    },
    'case-studies': {
      image: '/images/hero/process-design.jpg',
      title: 'Case Studies',
      subtitle:
        "From Salesforce implementations to sustainable energy initiatives, dive into detailed accounts of how we've helped businesses overcome challenges and achieve remarkable results. Get inspired, discover best practices, and envision the possibilities for your own organisation with Clyde Ventures.",
    },
    'professional-services': {
      image: '/images/hero/professional-services.jpeg',
      title: 'Professional Services',
      // subtitle:
      //   'Navigate the complexities of the professional services landscape with Clyde Ventures. Our tailored solutions empower you to reduce operating costs, optimise returns, embrace sustainability, ensure fair treatment of customers, and elevate your customer service.',
    },
    'consumer-standards': {
      image: '/images/blog-images/hero/consumer-standards-background.jpeg',
      title: 'Consumer Standards Reform',
      subtitle: '',
    },
    'domestic-sales': {
      image: '/images/blog-images/hero/domestic-sales-background.jpeg',
      title:
        "Domestic Sales: LEAN review across a client's operations to deliver £1.95M in benefits",
      subtitle: '',
    },
    'debt-value': {
      image: '/images/blog-images/hero/debt-value-background.jpg',
      title:
        'Confirmed the level of debt associated with leakage and segmented the cleansed portfolio to deliver a £2m upside',
      subtitle: '',
    },
    'debt-trilemma': {
      image: '/images/blog-images/hero/debt-trilemma-background.jpg',
      title: 'Energy Retailers: Addressing the Debt Trilemma',
      subtitle: '',
    },
    'opex-pressures': {
      image: '/images/blog-images/hero/opex-background.jpg',
      title:
        'Energy Retailers: Delivering a trusted service whilst managing OPEX pressures',
      subtitle: '',
    },
    'service-standards': {
      image: '/images/blog-images/hero/service-standards-background.jpg',
      title:
        'Energy Retailers: Elevating service standards while controlling downside risk to margin',
      subtitle: '',
    },
    'case-study': {
      image: '/images/hero-background.jpg',
      title: '',
      subtitle: '',
    },
    technology: {
      image: '/images/hero/technology.jpg',
      title: 'Technology',
      subtitle: '',
    },
  };

  const { title, subtitle, image } = heroData[hero];
  return (
    <HeroWrapper>
      <HeroNavigationStrip />
      <div className="h-[600px] md:h-[350px] relative">
        <div className="hero-inner-container">
          {title && <h1 className="hero-title">{title}</h1>}
          {subtitle && (
            <p className="hero-subtitle md:max-w-[80%]">{subtitle}</p>
          )}
          {/* Space for other elements tacked on the bottom of hero if required */}
          {children}
        </div>
        <BackgroundImage image={image} />
      </div>
    </HeroWrapper>
  );
}
