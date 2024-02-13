import Background from '@public/images/hero-background.jpg';
import Image from 'next/image';

export default function CourseModules() {
  const modules = [
    {
      title: 'Strategic Leadership Development',
      description:
        'Gain insights into effective strategic leadership practices, focusing on organisational change, risk management, and sustainable performance outcomes.',
    },
    {
      title: 'The Sustainable Energy Organisation',
      description:
        'Explore key developments in the energy sector, focusing on sustainability and a multi-agency approach to tackle energy challenges.',
    },
    {
      title: 'Energy Policy & Sustainability',
      description:
        'Understand the macro-economic factors affecting organisations, and delve into the role of governance in the energy sector.',
    },
    {
      title: 'Leading a Sustainable Organisation',
      description:
        'Examine organisational culture and methods to implement change for sustainable improvements.',
    },
    {
      title: 'Operations and Project Management',
      description:
        'Learn the principles of operations management and project management, crucial for adaptiveness and strategic relevance in organisations.',
    },
    {
      title: 'Business Intelligence and Data Analytics',
      description:
        'Master the use of data and analytics for business intelligence and problem-solving within organisations.',
    },
    {
      title: 'Accounting & Financial Practice of Energy Transactions',
      description:
        'Understand the financial aspects of energy transactions, including the interpretation and reaction to financial statements and reports.',
    },
    {
      title: 'Relationships and Business Development in a Digital Age',
      description:
        'Explore strategic marketing and branding in various contexts, particularly in relation to digital trends, sustainability, and globalisation.',
    },
    {
      title: 'Entrepreneurial Thinking & Practice',
      description:
        'Develop personal entrepreneurial skills, understanding the impact of different mindsets and approaches on organisational entrepreneurship.',
    },
    {
      title: 'Digital Transformation and Technical Innovation',
      description:
        'Focus on digital disruption and trends, developing skills for strategic decision-making and business planning in digital transformation.',
    },
    {
      title: 'Energy Supply & Trading',
      description:
        'Analyse the trading and pricing within the energy sector, including forecasting and understanding multifaceted market factors.',
    },
    {
      title: 'Economic Analysis for Strategists within the Energy Sector',
      description:
        'Learn about the key influencers of profit in businesses, including market structure, competition, and policy environment impacts.',
    },
    {
      title: 'Applied Strategic Management',
      description:
        'Engage with strategic theories and scenario planning processes, tailored for the energy sector.',
    },
    {
      title: 'Project',
      description:
        'Apply your knowledge in a capstone project, designed to tackle specific management challenges in the sustainable energy sector.',
    },
  ];

  return (
    <div className="relative py-16">
      <div className="inner-container text-center">
        <h2 className="section-heading ">Course Modules</h2>
        <p className="">
          Delve into the heart of the MBA in Sustainable Energy Futures and its
          array of modules. Each module is designed to equip you with advanced
          knowledge and practical skills, addressing the multifaceted challenges
          and innovations in the sustainable energy landscape.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {modules.map((module, i) => {
            return (
              <div
                key={i}
                className="p-4 bg-black card-rounding text-white center-contents "
              >
                <div>
                  <h5 className="text-md mb-2 font-semibold text-primary-orange">
                    {module.title}
                  </h5>
                  <p className="text-xs font-normal">{module.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="background absolute left-0 top-0 h-full w-full z-[-1]">
        <Image
          src={Background}
          layout="fill"
          objectFit="cover"
          unoptimized
          className="brightness-105"
        />
      </div>
    </div>
  );
}
