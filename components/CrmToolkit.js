import Image from 'next/image';

export default function CrmToolkit() {
  const cardsArray = [
    {
      title: 'Account and Contact Management',
      icon: '/icons/user.svg',
      desc: 'Allow users to manage customer accounts and contacts, providing a centralised view of all interactions and activities related to each customer.',
    },
    {
      title: 'Sales Process Management',
      icon: '/icons/schematics.svg',
      desc: 'Track and manage sales opportunities throughout the sales pipeline, from lead generation to deal closure.',
    },
    {
      title: 'Sales Forecasting',
      icon: '/icons/chart-line.svg',
      desc: 'Enable sales teams to make accurate revenue projections by analysing historical data and current opportunities.',
    },
    {
      title: 'Lead Management',
      icon: ' /icons/alternate-list.svg',
      desc: 'Capture, track and qualify leads, ensuring a smooth transition from marketing to sales.',
    },
    {
      title: 'Sales Collaboration',
      icon: '/icons/sales-collaboration-icon.svg',
      desc: 'Facilitate collaboration among team members, allowing them to share information, updates, and insights related to sales accounts and opportunities.',
    },
    {
      title: 'Sales Performance Management',
      icon: '/icons/tachometer-fast-alt.svg',
      desc: 'Access metrics and analytics to measure sales team performance, identify top-performing representatives, and optimise sales strategies.',
    },
    {
      title: 'Email Integration',
      icon: '/icons/email-outline.svg',
      desc: 'Connect your CRM to existing email platforms, allowing users to manage communication and track interactions with prospects and customers. ',
    },
    {
      title: 'Workflow Automation',
      icon: '/icons/workflow.svg',
      desc: 'Automate repetitive tasks, such as lead assignment, follow-ups, and notifications, improving productivity and reducing manual efforts.',
    },
    {
      title: 'Mobile Sales',
      icon: '/icons/alternate-mobile.svg',
      desc: 'With the use of an app, sales representatives can access customer information, update data, and manage sales activities on the go.',
    },
    {
      title: 'Reporting and Dashboards',
      icon: '/icons/report-columns.svg',
      desc: 'Customise reports, providing real-time insights into sales performance and trends. Capture and display custom data in dashboards and distribute them to your team.',
    },
    {
      title: 'Sales Analytics',
      icon: '/icons/search.svg',
      desc: 'Enable users to gain deeper insights into sales data, customer behaviour, and sales cycle performance.',
    },
    {
      title: 'Sales Process Customisation',
      icon: '/icons/customization.svg',
      desc: 'Tailor the CRM to fit your unique sales processes, ensuring the system aligns with your specific requirements.',
    },
  ];
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center">The CRM Toolkit</h2>
      <div className="grid grid-cols-3 gap-12 mt-12">
        {cardsArray.map((obj, i) => {
          return (
            <div className="text-center " key={i}>
              <div className="mx-auto w-fit bg-black-text p-4 rounded-full mb-4">
                <Image src={obj.icon} width={35} height={40} />
              </div>
              <h5 className="font-bold text-lg text-black-text mb-2">
                {obj.title}
              </h5>
              <p className="text-sm font-normal text-light-grey">{obj.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
