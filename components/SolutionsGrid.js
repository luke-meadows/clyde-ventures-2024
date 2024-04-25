import Image from 'next/image';
import Link from 'next/link';
import CustomSolutionBlurb from './CustomSolutionBlurb';

export const solutions = {
  salesforce: [
    {
      title: 'Sales Cloud',
      blurb:
        "Leveraging Sales Cloud, we optimised our clients' sales cycles and increased the efficiency of their CRM processes. Features like opportunity management and sales forecasting allowed for better resource allocation and a clearer visibility into sales pipelines. This enabled sales teams to focus on high-value activities, thus driving up conversion rates and revenue.",
      icon: '/icons/sales.svg',
    },
    {
      title: 'Service Cloud',
      blurb:
        'Our use of Service Cloud revolutionised customer service operations for our clients, incorporating features like AI-driven case routing and real-time service analytics. This not only sped up response times but also elevated the quality of service. As a result, our clients reported higher customer retention and satisfaction levels.',
      icon: '/icons/service.svg',
    },
    {
      title: 'Marketing Cloud & Marketing Cloud Account Engagement',
      blurb:
        'By combining the power of Marketing Cloud with Account Engagement, we crafted personalised marketing journeys and optimised campaign management. Enhanced analytics and segmentation tools led to more effective targeting and engagement strategies, significantly improving campaign performance and customer acquisition rates.',
      icon: '/icons/marketing.svg',
    },
    {
      title: 'Energy and Utilities Cloud',
      blurb:
        'With the Energy and Utilities Cloud, we improved our clients’ customer interactions and streamlined their operations by integrating smart grid data and providing predictive maintenance insights. This not only reduced operational costs but also enhanced service reliability and customer trust in these sectors.',
      icon: '/icons/utilities.png',
    },
    {
      title: 'Experience Cloud',
      blurb:
        'Utilising Experience Cloud, we created bespoke digital platforms that fostered community engagement and streamlined communication channels for our clients. Features such as personalised content and mobile-first communities enhanced user experience, boosting collaboration and engagement across stakeholders.',
      icon: '/icons/experience.svg',
    },
    {
      title: 'Net Zero Cloud',
      blurb:
        'Implementing Net Zero Cloud, we helped clients accurately track their sustainability efforts and manage their carbon accounting. This facilitated effective reporting on environmental impact and supported the development of more sustainable business practices, reinforcing their commitment to environmental stewardship.',
      icon: '/icons/net-zero.svg',
    },
    {
      title: 'Field Service Cloud',
      blurb:
        "Our deployment of Salesforce’s Field Service solution included mobile workforce enablement and real-time operations visibility, which significantly improved our clients' service efficiency. Automated scheduling and resource optimization ensured that the right personnel were dispatched at the right times, sharply increasing on-time service delivery and customer satisfaction.",
      icon: '/icons/field-service.svg',
    },
  ],
  'process-design': [
    {
      title: 'Product Design',
      customBlurb: 'product-design',
      icon: '/icons/sales.svg',
    },

    {
      title: 'Process Design',
      blurb:
        'We employ a strategic approach to process design, focusing on analysing, improving, and streamlining business processes to enhance efficiency, reduce costs, and drive growth. Through a collaborative and client-centric methodology, we work closely with organisations to identify pain points, bottlenecks, and inefficiencies in their current processes. By implementing efficient and effective processes, we help our clients to enhance productivity, responsiveness, and quality while reducing waste and errors.',
      icon: '/icons/sales.svg',
    },
    {
      title: 'Automation & AI',
      blurb:
        'We harness the power of process automation and artificial intelligence (AI) to assist our clients in revolutionising their operations and achieving significant business outcomes. We employ a forward-thinking approach to leverage technology for streamlining processes, increasing efficiency, and driving innovation. We specialise in developing and implementing automated processes that reduce manual intervention, minimise errors, and enhance speed and accuracy. ',
      icon: '/icons/sales.svg',
    },
  ],
  'wacc-outperformance': [
    {
      title: 'ODI Integration & Design',
      blurb:
        'Born from Operations, Clyde Ventures take a systemic view to improving performance.  To exemplify this, we have helped some of our Regulated Energy Network clients model the concept of  “a single circuit view”  within the overall network. This holistic perspective encompasses numerous aspects including physical layout, operational parameters, maintenance history and performance metrics. By maintaining a single view, network operators can efficiently manage and optimise the circuit, ensuring reliable power distribution and effective response to any issues or disruptions.',
      icon: '/icons/sales.svg',
    },
    {
      title: 'Value Modelling',
      blurb:
        'Value is central to everything we do at Clyde Ventures. Regardless of the project delivery mode, Clyde Ventures’ own internal Governance demands that all our consultants identify and articulate a clear benefit opportunity aligned to the clients’ needs during project mobilisation. ',
      icon: '/icons/sales.svg',
    },
    {
      title: 'Business Case and ROI Due Diligence',
      blurb:
        'We have helped develop strong business cases with compelling ROIs for numerous public and private Clients adopting the preferred frameworks across the respective sectors such as the HMT 5 case model. We are particularly adept in helping Regulated Network Operators optimise their WACC returns through targeted process improvement and asset optimisation that enhance underperforming ODIs.',
      icon: '/icons/sales.svg',
    },
  ],
  'independence-upskilling-and-design-authority': [
    {
      title: 'Design Assurance',
      blurb:
        'Our team of architectural experts will ensure that you are getting the most value possible from your Salesforce investment. We are experienced in guiding the decision making of a Salesforce solution to the best outcome by adhering to best-practice and architectural principles – regardless of the point in development that you are in. We make sure that your organisation is able to maximise your return on investment while minimising any maintenance overheads.',
      icon: '/icons/sales.svg',
    },

    {
      title: 'Client Capability Cultivation',
      blurb:
        'All of our engagements include a focus on upskilling our client to maximise internal capability and ensuring that they are in a position to self-serve. We have no desire to create clients who are continually dependent on external parties; in fact, we aim to reduce client dependence on external parties in all of our engagements and also offer this as stand alone training to build internal skillset.',
      icon: '/icons/sales.svg',
    },
    {
      title: 'Social Mobility Enablement',
      blurb:
        'Our social values are important to us. We recruit 90% of our staff from the most deprived 10% of postcodes and train them with the necessary technical, analytical and Utility Sector skills and knowledge needed to work as professional management consultants.By working with us, not only are you collaborating with a company with these strong social, diversity and inclusion values but, we also offer this to our clients so that we can develop people for your business so that you can further enhance your own social, diversity and inclusion values and support social mobility.',
      icon: '/icons/sales.svg',
    },
  ],
  'top-line-growth': [
    {
      title: 'Sales Strategy',
      customBlurb: 'sales-strategy',
      icon: '/icons/sales.svg',
    },
    {
      title: 'Debt Strategy',
      customBlurb: 'debt-strategy',
      icon: '/icons/service.svg',
    },
    {
      title: 'Margin Optimisation',
      customBlurb: 'margin-optimisation',

      icon: '/icons/service.svg',
    },
    {
      title: 'Due Diligence',
      customBlurb: 'due-diligence',

      icon: '/icons/service.svg',
    },
  ],
  'service-excellence': [
    {
      title: 'Contact Strategy',
      blurb:
        "By leveraging advanced analytics and industry insights Clyde Ventures can support the development of a bespoke approach to both inbound and outbound contact strategy tailored to each client's needs. Our solutions integrate cutting-edge communication technologies, to ensure seamless accessibility and responsiveness. Through proactive outreach initiatives and strategic touchpoints, we can enhance all areas of your customer communication to drive improved provision of service and meeting of business objectives. ",
      icon: '/icons/sales.svg',
    },
    {
      title: 'Complaints Strategy',
      blurb:
        'Our comprehensive approach to enhancing your complaints management framework typically involves diagnostic analysis of your current processes, identifying pain points and opportunities for improvement. Guided by industry best practice, data analytics, and innovative technologies, we design and implement tailored solutions that streamline complaint resolution, mitigate risks, aid prevention, and transform negative experiences into opportunities for customer retention and loyalty. We understand the regulatory frameworks that our clients operate within and can drive enhanced compliance and improved standing with external parties. ',
      icon: '/icons/service.svg',
    },
    {
      title: 'Vulnerability Strategy',
      blurb:
        'We are committed to empowering organisations to serve all customers with compassion. We specialise in vulnerable customer training and conversation design that is not only functional but promotes empathy. Our team is skilled in creating communication protocols that prioritise understanding and support, ensuring that every interaction with vulnerable customers is meaningful and respectful. We excel in designing processes specifically tailored to the needs of vulnerable customers, integrating accessibility features, and implementing safeguards to protect their interests. Through rigorous reporting and analysis, we can help you measure and communicate the positive outcomes of your vulnerability strategy enhancing your social impact and reputation with external stakeholders.',
      icon: '/icons/service.svg',
    },
    {
      title: 'Existing Process Optimisation',
      blurb:
        'We recognise the value of building upon the strengths of your current processes while identifying opportunities for enhancement and efficiency gains. We utilise extensive analysis of your existing workflows, advanced analytics, and industry benchmarks to identify areas for improvement. Leveraging our expertise in process optimisation methodologies such as Lean Six Sigma, we collaborate closely with your team to streamline operations, eliminate bottlenecks, and maximise resource utilisation. Through tailored recommendations and hands-on support, we empower your organisation to achieve greater agility, productivity, and cost-effectiveness while preserving the integrity of your established processes. ',
      icon: '/icons/service.svg',
    },
  ],
  'opex-optimisation': [
    {
      title: 'Opex Reduction & Lean Sigma',
      blurb:
        'We understand implicitly the imperative for driving efficiency in all that you do so whether its eliminating non value add activity, reducing variation across your processes through standardisation, increasing the quality of your outputs or balancing your ability to manage fluctuating demand Clyde Ventures can help you to significantly reduce your Operational costs.',
      icon: '/icons/sales.svg',
    },
    {
      title: 'RPA, Automation and AI',
      blurb:
        'Clyde Ventures have had considerable experience of using RPA to automate repetitive tasks, freeing up their Clients’ valuable resources to work on higher-value activity. As a certified Salesforce Integration Partner, we are adept at using technology to increase automation and in developing experience clouds that empower customers and increase self-serve. We have delivered a number of AI solutions,  leveraging machine learning and natural language processing to reduce costs through applications such as Intelligent Document Processing.',
      icon: '/icons/service.svg',
    },
    {
      title: 'Data & Analytics',
      blurb:
        'Clyde Ventures were born from Operations so we’re acutely aware of how important good quality data and analytics are in helping you optimise your resources and make better informed decisions. We have a strong track record in data analytics. Cleansing and manipulating data sets to crystallise new insights, we enable organisations to streamline their operations, reduce waste to enhance efficiency and ultimately lower operating costs.',
      icon: '/icons/service.svg',
    },
    {
      title: 'Business Case and ROI',
      blurb:
        'Value is central to everything we do. Regardless of the project delivery mode, Clyde Ventures’ own internal Governance demands that all our consultants identify and articulate a clear benefit opportunity aligned to the clients’ needs during project mobilisation. We have helped develop strong business cases with compelling ROIs for numerous public and private Clients adopting the preferred frameworks across the respective sectors such as the HMT 5 case model. We are particularly adept in helping Regulated Network Operators optimise their WACC returns through targeted process improvement and asset optimisation that enhance underperforming ODIs.',
      icon: '/icons/service.svg',
    },
  ],
  'business-and-culture-change': [
    {
      title: 'Service & TOM Design',
      blurb:
        'Clyde Ventures leverages our industry expertise, data-driven insights, and innovative methodologies to design service frameworks and TOMs that focus on driving operational excellence. We will collaborate closely with your teams to support the creation of agile and scalable service models and TOMs that optimise resource allocation, streamline workflows, and enhance organisational agility. ',
      icon: '/icons/sales.svg',
    },
    {
      title: 'Adoption & Engagement',
      blurb:
        'We engage your team at every step through tailored communication strategies ensuring every team member understands the rationale behind the proposed changes and sees the value in adopting new practices. We immerse ourselves in your teams, in a non-disruptive manner, operating with full transparency in terms of our toolkit and analysis while sharing knowledge and upskilling your internal teams to deliver results long after our engagement is completed.',
      icon: '/icons/service.svg',
    },
    {
      title: 'Culture Change & Capability Building',
      blurb:
        'Our operational excellence team specialises in driving culture change and building organisational capabilities, understanding that shaping behaviours and outcomes is critical to sustainable growth. With our proven methodologies and targeted interventions, we cultivate a culture of innovation and continuous improvement empowering your people to navigate change confidently and achieve long-term success.',
      icon: '/icons/service.svg',
    },
    {
      title: 'Social Mobility D,E & I',
      blurb:
        'Clyde Ventures socially conscious recruitment strategy means that we are well-positioned to support you recruit and develop a diverse workforce that delivers a tangible societal impact to the communities you operate in. Our approach will help you unlock a diverse talent pool through our unique insights and strong relationships with charities and non-traditional recruitment channels.',
      icon: '/icons/service.svg',
    },
  ],
  consultancy: [
    {
      title: 'Top Line Growth',
      blurb:
        'Clyde Ventures’ mission is to create social mobility by delivering top line growth for our clients. We teach people how to fish in new waters using the following range of solutions.',
      icon: '/icons/sales.svg',
      url: 'consultancy/top-line-growth',
    },
    {
      title: 'Service Excellence',
      blurb:
        'Born from operations, our expertise lies in understanding customer needs and preferences, optimising processes, and implementing innovative strategies to enhance the overall customer experience. Through analysis of customer touchpoints, we identify areas for improvement and develop tailored solutions to address pain points and elevate satisfaction levels. With our guidance and support, our clients transform their service operations to cultivate enduring relationships with their customers, driving loyalty, advocacy, and sustainable business growth.',
      icon: '/icons/service.svg',
      url: 'consultancy/service-excellence',
    },
    {
      title: 'OPEX Optimisation',
      blurb:
        'Clyde Ventures can help you reduce your Operational expenditure in numerous ways. Leveraging Lean sigma to reduce waste, re-designing processes to be more efficient, improving end-to-end connectivity across supply chains using big data and harnessing the power of RPA and AI to work smarter, we have cuts our Clients’ costs without compromising quality or customer experience.',
      icon: '/icons/service.svg',
      url: 'consultancy/opex-optimisation',
    },
    {
      title: 'Business and Culture Change',
      blurb:
        'At Clyde Ventures we excel at driving business transformation and culture change for our clients. Using proven methodologies and our unique toolkit, our specialty lies in aligning strategic goals with your cultural values, ensuring engagement and adoption at every level. Our expertise and customer solutions help to empower your organisation to navigate transitions seamlessly, fostering sustainable growth and a culture of continuous improvement.',
      icon: '/icons/service.svg',
      url: 'consultancy/business-and-culture-change',
    },
  ],
  integration: [
    {
      title: 'Salesforce',
      blurb:
        "We are a leading Salesforce integrator and Salesforce Partner that chooses to integrate Salesforce as the preferred CRM solution for its clients due to Salesforce's unparalleled capabilities in centralising customer data, providing valuable insights, enhancing customer service efficiency, automating processes, ensuring scalability, enabling customisation and integration, offering mobile accessibility, and prioritising security and compliance.",
      icon: '/icons/sales.svg',
      url: 'integration/salesforce',
    },
    {
      title: 'Organisational Effectiveness and Product Development',
      blurb:
        'Place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text place holder text.',
      icon: '/icons/service.svg',
      url: 'integration/organisational-effectiveness-and-product-development',
    },
    {
      title: 'WACC Outperformance',
      blurb:
        'Clyde Ventures are particularly adept in helping Regulated Network Operators optimise their WACC returns through targeted process improvement and asset optimisation that drive up performance across all of their lagging outcome delivery incentives.',
      icon: '/icons/service.svg',
      url: 'integration/wacc-outperformance',
    },
    {
      title: 'Independence, Upskilling and Design Authority',
      blurb:
        'At Clyde Ventures, we have no wish to create a scenario where our clients are continually dependent on us. We believe that ensuring our clients are capable of self-serving will lead to them returning because they want to; not because they have to. We ensure that we upskill our clients and we also offer to support assessment of design and delivery that other integrators have carried out as we understand that, sometimes a client does not have sufficient internal skillset to make these assessments.',
      icon: '/icons/service.svg',
      url: 'integration/independence-upskilling-design-authority',
    },
  ],
};

export default function SolutionsGrid({ solution }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
      {solutions[solution].map((card, i) => {
        return (
          <div
            key={i}
            className="shadow-card rounded-md bg-black-text p-6 h-full"
          >
            <div className="card-top flex justify-between pb-4">
              <div className="card-top-left flex gap-4 items-center">
                <div className="bg-primary-orange h-8 w-8 aspect-square center-contents rounded-full text-lg cursor-pointer">
                  <Image src={card.icon} width={18} height={18} />
                </div>
                <h3 className="font-normal text-xl text-primary-orange">
                  {card.title}
                </h3>
              </div>
            </div>
            {card.customBlurb ? (
              // Custom solution blurb to accommodate bullets etc
              <CustomSolutionBlurb solution={card.customBlurb} />
            ) : (
              // Otherwise render the standard solution blurb
              <p className="font-normal text-sm">{card.blurb}</p>
            )}

            {card.url && (
              <Link href={card.url}>
                <button className="button mt-4">Learn More</button>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
