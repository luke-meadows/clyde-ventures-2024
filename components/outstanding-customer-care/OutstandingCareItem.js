import Image from 'next/image';

export default function OutstandingCareItem({ item }) {
  const items = {
    industry: {
      title: 'Industry',
      blurb:
        'Our team have held senior positions in multiple regulated sectors such as utilities and financial services. As such, we know these industries extensively and, more importantly, understand our Client’s challenges. We are not standard integrators; we are management consultants and industry experts who use technological solutions to support the delivery of operational goals, alongside a robust and detailed value model, underpinning the benefits of the transformation.',
    },
    salesforce: {
      title: 'Salesforce',
      blurb:
        'Scotland’s largest independent Salesforce Integrator, we have a team of multi-certified implementation experts who have built up a compelling library of case studies on the back of numerous successful integrations which have delivered our client’s strategic outcomes. In addition, we are certified in both Net Zero Cloud and Energy and Utility Cloud implementations and are now the Salesforce partner holding the most E&U Cloud certifications in the entirety of the UK and Ireland.',
    },
    operations: {
      title: 'Operations',
      blurb:
        'Our team are born from operations, so we understand the challenges involved and have the scars. We promote transparency and collaboration. Because we provide an operational solution which is systematised with Salesforce, we create much greater value than a systemic deployment alone. We approach our engagements with an operational head, so we don’t think like a standard software integrator. We ensure that everything we do ties back to quantifiable value and we deliver that value with agility. ',
    },
    'force-for-social-good': {
      title: 'A Force For Social Good',
      blurb:
        'We recruit 90% of our staff from the most deprived 10% of postcodes and train them with the necessary technical, analytical and industry skills needed to work as professional management consultants. This unique recruitment approach has allowed us to overcome the traditional talent supply chain issues that hinder our competitors and enables us to accelerate project delivery across multiple continents. All of our staff own shares in the business consequently, we have a team that are engaged, loyal and keen to show our clients that our recruitment model works. We are on a mission to encourage all businesses to assess, build and develop talent like we do.',
    },
    'technology-adoption-and-innovation': {
      title: 'Technology Adoption and Innovation',
      blurb:
        'Embracing technology and innovation is essential for remaining competitive and meeting client expectations. However, integrating new technologies, managing digital transformation, and staying ahead of technological advancements can be a daunting task. Balancing innovation with the need for security and data protection adds another layer of complexity. ',
    },
    'client-acquisition-and-retention': {
      title: 'Client Acquisition and Retention',
      blurb:
        'Acquiring new clients and retaining existing ones can be challenging due to increasing competition and changing client demands. Building and maintaining strong client relationships while continuously delivering value is crucial.',
    },
    'regulatory-compliance': {
      title: 'Regulatory Compliance',
      blurb:
        'Staying compliant with evolving regulatory frameworks, both domestically and internationally, is a significant concern for professional services firms. Navigating complex regulations while ensuring adherence to ethical standards adds complexity and can pose risks if not managed effectively.',
    },
    'reducing-operating-costs-to-improve-retail-margin': {
      title: 'Reducing Operating Costs to Improve Retail Margin',
      blurb:
        'Efficient operations are essential for maintaining competitiveness and profitability in the utility sector. By reducing operating costs, we can enhance our retail margin, ensuring sustainable growth while delivering value to our customers.',
    },
    'optimising-wacc-returns-in-regulated-utilities': {
      title: 'Optimising WACC Returns in Regulated Utilities',
      blurb:
        'As a regulated utility, optimising Weighted Average Cost of Capital (WACC) returns is crucial. It enables us to efficiently allocate capital, fund essential infrastructure projects, and maintain reliable service delivery—all while satisfying regulatory requirements and attracting investment.',
    },
    'decarbonisation-and-sustainability': {
      title: 'Decarbonisation and Sustainability',
      blurb:
        'Addressing climate change and promoting sustainability are paramount. By investing in renewable energy sources and adopting sustainable practices, we mitigate environmental risks, comply with regulations, and enhance our reputation as responsible stewards of the environment.',
    },
    'treating-customers-fairly-and-managing-vulnerability': {
      title: 'Treating Customers Fairly and Managing Vulnerability',
      blurb:
        'Our commitment to fair treatment and customer welfare is fundamental. By protecting vulnerable customers and implementing transparent pricing practices, we build trust, loyalty, and positive relationships within our communities.',
    },
    'improving-customer-service': {
      title: 'Improving Customer Service',
      blurb:
        'Exceptional customer service is a priority for any organisation in the utilities sector. By investing in service improvement initiatives, we enhance satisfaction, loyalty, and retention ensuring a positive experience for all our customers.',
    },
    'regulatory-compliance-technology': {
      title: 'Regulatory Compliance',
      blurb:
        'Technology companies face a complex landscape of regulations and compliance requirements, both domestically and internationally, which can be challenging to navigate and adapt to.',
    },
    'environmental-sustainability': {
      title: 'Environmental Sustainability',
      blurb:
        'The energy consumption and environmental impact of technology infrastructure, including data centers and electronic devices, contribute to climate change. Finding sustainable solutions, such as renewable energy sources and eco-friendly manufacturing practices, is essential for mitigating these effects.',
    },
    'workforce-diversity-and-inclusion': {
      title: 'Workforce Diversity and Inclusion',
      blurb:
        'The tech industry has been criticized for its lack of diversity and inclusion, particularly in terms of gender and racial representation. Building a more diverse and inclusive workforce is crucial for driving innovation and addressing the needs of a diverse global population.',
    },
  };
  return (
    <div className="flex gap-4 mb-4">
      <div className="icon-wrapper bg-primary-orange">
        <Image src="/icons/tick.svg" width={28} height={28} />
      </div>
      <div>
        <h5 className="text-xl font-semibold pt-1.5 mb-2">
          {items[item].title}
        </h5>
        <p className="text-sm font-normal">{items[item].blurb}</p>
      </div>
    </div>
  );
}
