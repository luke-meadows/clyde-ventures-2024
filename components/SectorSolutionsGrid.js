import Image from 'next/image';
import Link from 'next/link';
import CustomSolutionBlurb from './CustomSolutionBlurb';

export const solutions = {
  technology: [
    {
      title: 'Salesforce',
      blurb:
        'We are a multi-certified Salesforce integrator and consulting partner and have implemented and integrated Salesforce across multiple continents to deliver functionality across Sales, Service, Marketing, Industries and many other areas. In addition, because our background is both, operational and from the industries in which we operate, we do not think like other software integrators. We always ensure that the technology serves the operational need, user experience and interface is paramount, and it is configured in such a way as to maximise value creation and optimise customer experience and impact.',
      icon: '/icons/sales.svg',
      url: 'integration/salesforce',
    },
    {
      title: 'Net Zero Cloud',
      blurb:
        'Implementing Net Zero Cloud, we helped clients accurately track their sustainability efforts and manage their carbon accounting. This facilitated effective reporting on environmental impact and supported the development of more sustainable business practices, reinforcing their commitment to environmental stewardship.',
      icon: '/icons/net-zero.svg',
    },
  ],
  // BREAK
  'professional-services': [
    {
      title: 'Salesforce',
      blurb:
        'We are a multi-certified Salesforce integrator and consulting partner and have implemented and integrated Salesforce across multiple continents to deliver functionality across Sales, Service, Marketing, Industries and many other areas. In addition, because our background is both, operational and from the industries in which we operate, we do not think like other software integrators. We always ensure that the technology serves the operational need, user experience and interface is paramount, and it is configured in such a way as to maximise value creation and optimise customer experience and impact.',
      icon: '/icons/sales.svg',
      url: 'integration/salesforce',
    },
    {
      title: 'Marketing Cloud & Marketing Cloud Account Engagement',
      blurb:
        'By combining the power of Marketing Cloud with Account Engagement, we crafted personalised marketing journeys and optimised campaign management. Enhanced analytics and segmentation tools led to more effective targeting and engagement strategies, significantly improving campaign performance and customer acquisition rates.',
      icon: '/icons/marketing.svg',
    },
  ],
  // BREAK
  utilities: [
    {
      title: 'Salesforce',
      blurb:
        'We are a multi-certified Salesforce integrator and consulting partner and have implemented and integrated Salesforce across multiple continents to deliver functionality across Sales, Service, Marketing, Industries and many other areas. In addition, because our background is both, operational and from the industries in which we operate, we do not think like other software integrators. We always ensure that the technology serves the operational need, user experience and interface is paramount, and it is configured in such a way as to maximise value creation and optimise customer experience and impact.',
      icon: '/icons/sales.svg',
      url: 'integration/salesforce',
    },
    {
      title: 'Net Zero Cloud',
      blurb:
        'Implementing Net Zero Cloud, we helped clients accurately track their sustainability efforts and manage their carbon accounting. This facilitated effective reporting on environmental impact and supported the development of more sustainable business practices, reinforcing their commitment to environmental stewardship.',
      icon: '/icons/net-zero.svg',
    },
    {
      title: 'Energy and Utilities Cloud',
      blurb:
        'With the Energy and Utilities Cloud, we improved our clients’ customer interactions and streamlined their operations by integrating smart grid data and providing predictive maintenance insights. This not only reduced operational costs but also enhanced service reliability and customer trust in these sectors.',
      icon: '/icons/utilities.png',
    },
    {
      title: 'Organisational Effectiveness and Product Development',
      blurb:
        "Using visionary Product Design, strategic Process Design and cutting-edge Automation & AI, we propel your organisation towards success. Let's shape the future of your business together.",
      icon: '/icons/service.svg',
      url: '/services/integration/organisational-effectiveness-and-product-development',
    },
    {
      title: 'Top Line Growth',
      blurb:
        'Clyde Ventures’ mission is to create social mobility by delivering top line growth for our clients. We teach people how to fish in new waters using the following range of solutions.',
      icon: '/icons/sales.svg',
      url: '/services/consultancy/top-line-growth',
    },
    {
      title: 'Service Excellence',
      blurb:
        'Born from operations, our expertise lies in understanding customer needs and preferences, optimising processes, and implementing innovative strategies to enhance the overall customer experience. Through analysis of customer touchpoints, we identify areas for improvement and develop tailored solutions to address pain points and elevate satisfaction levels. With our guidance and support, our clients transform their service operations to cultivate enduring relationships with their customers, driving loyalty, advocacy, and sustainable business growth.',
      icon: '/icons/service.svg',
      url: '/services/consultancy/service-excellence',
    },
    {
      title: 'OPEX Optimisation',
      blurb:
        'Clyde Ventures can help you reduce your Operational expenditure in numerous ways. Leveraging Lean sigma to reduce waste, re-designing processes to be more efficient, improving end-to-end connectivity across supply chains using big data and harnessing the power of RPA and AI to work smarter, we have cut our Clients’ costs without compromising quality or customer experience.',
      icon: '/icons/service.svg',
      url: '/services/consultancy/opex-optimisation',
    },
    {
      title: 'Business and Culture Change',
      blurb:
        'At Clyde Ventures we excel at driving business transformation and culture change for our clients. Using proven methodologies and our unique toolkit, our specialty lies in aligning strategic goals with your cultural values, ensuring engagement and adoption at every level. Our expertise and customer solutions help to empower your organisation to navigate transitions seamlessly, fostering sustainable growth and a culture of continuous improvement.',
      icon: '/icons/service.svg',
      url: '/services/consultancy/business-and-culture-change',
    },
  ],
};

export default function SectorSolutionsGrid({ solution }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
      {solutions[solution].map((card, i) => {
        return (
          <div
            key={i}
            className="shadow-card md:rounded-md bg-black-text p-6 h-full"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="card-top flex justify-between pb-4">
                  <div className="card-top-left flex gap-4 items-center">
                    <h3 className="font-semibold text-xl text-primary-orange">
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
              </div>
              {card.url && (
                <Link href={card.url}>
                  <button className="button mt-4 text-sm">Learn More</button>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
