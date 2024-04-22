import { motion } from 'framer-motion';
import {
  dropdownBackgroundFramerVariant,
  dropdownFramerVariant,
  dropdownInnerFramerVariant,
} from '@app/lib/framer-motion';
import { dropdownDirectory } from '@app/lib/dropdownDirectory';
import DropdownGrid from './DropdownGrid';

export default function NavDropdown({ dropdownActive, setDropdownActive }) {
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
        <div className="grid grid-cols-2 gap-6 border-10">
          {dropdownDirectory[dropdownActive]?.map((item, i) => (
            <DropdownGrid item={item} key={i} />
          ))}
        </div>
      </motion.div>
      <motion.div
        onMouseEnter={() => setDropdownActive('none')}
        className="background absolute left-0 top-28 h-[100vh] w-[100vw] bg-black-text z-[-1]  "
        variants={dropdownBackgroundFramerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.div>
    </motion.div>
  );
}
