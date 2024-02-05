import { motion } from 'framer-motion';
import {
  dropdownBackgroundFramerVariant,
  dropdownFramerVariant,
  dropdownInnerFramerVariant,
} from '@app/lib/framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { dropdownDirectory } from '@app/lib/dropdownDirectory';

export default function NavDropdown({ dropdownActive, setDropdownActive }) {
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
      className="dropdown w-full shadow-nav-bottom bg-black  mb-10 text-off-white transition-all 0.5s ease-in "
    >
      <motion.div
        className="inner-dropdown inner-container py-16 flex flex-col gap-2 wrap"
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
              <Link
                href={item.url}
                className="card-top bg-black-text flex justify-between items-center py-3 pl-3"
              >
                <div className="card-top-left flex items-center gap-4 flex-1">
                  <div className="bg-primary-orange h-14 w-14 aspect-square center-contents rounded-full text-lg cursor-pointer">
                    <Image src={item.icon} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-xl ">{item.title}</h3>
                </div>
                {!item.options && <ArrowIcon />}
              </Link>
              {/* Card Bottom */}
              <div
                className={
                  'border-medium-grey ' + (item.options && 'border-t-2')
                }
              >
                {item.options &&
                  item.options.map((option, i) => (
                    <Link
                      href={option.url}
                      key={i * 777}
                      className={
                        'border-medium-grey flex items-center hover:bg-black-text ' +
                        (item.options.length - 1 === i ? '' : 'border-b-2 ')
                      }
                    >
                      <div className="px-3 py-2 flex-1">
                        <h5 className="text-lg text-primary-orange">
                          {option.title}
                        </h5>
                        {option.options && (
                          <p className="text-sm font-light">
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
      <motion.div
        onMouseEnter={() => setDropdownActive('none')}
        className="background absolute left-0 top-28 h-[100vh] w-[100vw] bg-black-text z-[-1]"
        variants={dropdownBackgroundFramerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.div>
    </motion.div>
  );
}
