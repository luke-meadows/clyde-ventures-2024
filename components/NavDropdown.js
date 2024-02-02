import { motion } from 'framer-motion';
import {
  dropdownFramerVariant,
  dropdownInnerFramerVariant,
} from '@app/lib/framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NavDropdown({ dropdownActive }) {
  const dropdownDirectory = {
    services: [
      {
        title: 'Consultancy',
        url: '/services/consultancy',
        icon: '/icons/consultancy.png',
        options: [
          {
            title: 'Top Line Growth',
            url: '/services/consultancy/top-line-growth',
            options: [
              'Sales Strategy',
              '|',
              'Debt Strategy',
              '|',
              'Margin Optimisation',
              '|',
              'Sales Strategy',
            ],
          },
          {
            title: 'Service Excellence',
            url: '/services/consultancy/service-excellence',
            options: [
              'Contact Strategy',
              '|',
              'Complaints Strategy',
              '|',
              'Vulnerability Strategy',
              '|',
              'Existing Process Optimisation',
            ],
          },
          {
            title: 'OPEX Optimisation',
            url: '/services/consultancy/opex-optimisation',
            options: [
              'OPEX reduction & Lean',
              '|',
              'RPA, Automation & AI',
              '|',
              'Data & Analytics',
              '|',
              'Business Care & ROI Due Diligence',
            ],
          },
          {
            title: 'Business and Culture Change',
            url: '/services/consultancy/business-and-culture-change',
            options: [
              'Service & TOM Design',
              '|',
              'Adoption & Engagement',
              '|',
              'Culture Change & Capability Building',
              '|',
              'Social Mobility D,E & I',
            ],
          },
        ],
      },
      {
        title: 'Integration',
        url: '/services/integration',
        icon: '/icons/integration.png',
        options: [
          {
            title: 'Top Line Growth - Salesforce',
            url: '/services/consultancy/top-line-growth-salesforce',
            options: [
              'Sales Cloud',
              '|',
              'Marketing Cloud',
              '|',
              'Energy & Utilities Cloud',
              '|',
              'Account Engagement',
              '|',
              'Service Cloud',
              '|',
              'Experience Cloud',
              '|',
              'Product Design',
            ],
          },
          {
            title: 'Field Optimisation - Salesforce',
            url: '/services/integration/field-optimisation-salesforce',
            options: [
              'Field Service Cloud',
              '|',
              'Energy & Utilities Cloud',
              '|',
              'Account Engagement',
              '|',
              'Service Cloud',
              '|',
              'Experience Cloud',
              '|',
              'Product Design',
            ],
          },
          {
            title: 'WACC Outperformance',
            url: '/services/integration/wacc-outperformance',
            options: [
              'ODI Integration & Design',
              '|',
              'Value Modelling',
              '|',
              'Business Case & ROI Due Diligence',
            ],
          },
          {
            title: 'Independence, Upskilling and Design Authority',
            url: '/services/integration/independence-upskilling-design-authority',
            options: [
              'Assessment of Incumbent Integrator',
              '|',
              'Design Assurance',
              '|',
              'Client Capability Cultivation',
              '|',
              'Social Mobility Enablement',
            ],
          },
        ],
      },
      {
        title: 'Education',
        url: '/services/education',
        icon: '/icons/education.png',
        options: [
          { title: 'Sustainable Futures MBA', url: '/services/education/MBA' },
        ],
      },
      {
        title: 'Manufacturing',
        url: '/services/manufacturing',
        icon: '/icons/manufacturing.png',
        options: [
          {
            title: 'Fire Resistant Panels',
            url: '/services/manufacturing/FRP',
          },
        ],
      },
    ],
    'about-us': [
      {
        title: 'About us',
        url: '',
      },
      {
        title: 'Meet the team',
        url: '',
      },
    ],
    industries: [
      { title: 'Utilities', url: '', icon: '/icons/utilities.png' },
      {
        title: 'Professional Services',
        url: '',
        icon: '/icons/professional-services.png',
      },
      { title: 'Manufacturing', url: '', icon: '/icons/manufacturing.png' },
      {
        title: 'Information Technology',
        url: '',
        icon: '/icons/technology.png',
      },
      { title: 'Education', url: '', icon: '/icons/education.png' },
      { title: 'Transport & Logistics', url: '', icon: '/icons/transport.png' },
    ],
  };
  const ArrowIcon = () => {
    return (
      <div className="h-8 aspect-square center-contents rounded-full p-1 text-lg cursor-pointer bg-primary-orange mr-3">
        <i className="icon-angle-right text-black-text text-2xl pl-[3px]" />
      </div>
    );
  };
  return (
    <motion.div
      variants={dropdownFramerVariant}
      initial="initial"
      animate="enter"
      exit="exit"
      className="dropdown w-full shadow-nav-bottom bg-black border-b-2  mb-10 text-off-white transition-all 0.5s ease-in"
    >
      <motion.div
        className="inner-dropdown inner-container py-12 flex flex-col gap-2 wrap"
        variants={dropdownInnerFramerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="grid grid-cols-2 gap-6">
          {dropdownDirectory[dropdownActive]?.map((item, i) => (
            <div
              key={i}
              className="border-[2px] border-medium-grey flex-1 card-rounding h-fit"
            >
              {/* Card Top */}
              <div className="card-top bg-black-text flex justify-between items-center py-3 pl-3">
                <div className="card-top-left flex items-center gap-4 flex-1">
                  <div className="bg-primary-orange h-14 w-14 aspect-square center-contents rounded-full text-lg cursor-pointer">
                    <Image src={item.icon} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-xl ">{item.title}</h3>
                </div>
                {!item.options && <ArrowIcon />}
              </div>
              {/* Card Bottom */}
              <div
                className={`${
                  item.options && 'border-t-2 '
                } border-medium-grey`}
              >
                {item.options &&
                  item.options.map((option, i) => (
                    <Link
                      href={option.url}
                      key={i * 777}
                      className={`${
                        item.options.length - 1 === i ? '' : 'border-b-2 '
                      } border-medium-grey flex items-center hover:bg-black-text `}
                    >
                      <div className="px-3 py-2 flex-1">
                        <h5 className="text-lg text-primary-orange">
                          {option.title}
                        </h5>
                        {option.options && (
                          <p className="text-sm font-normal">
                            {option.options.map((subOption, i) =>
                              subOption === '|' ? (
                                <span
                                  key={i * 120}
                                  className="text-primary-orange px-2 leading-6"
                                >
                                  |
                                </span>
                              ) : (
                                subOption
                              )
                            )}
                          </p>
                        )}
                      </div>
                      <ArrowIcon />
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
