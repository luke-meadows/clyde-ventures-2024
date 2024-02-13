'use client';
import Image from 'next/image';
import Logo from '@public/images/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavDropdown from './NavDropdown';
import NavButtons from './NavButtons';
import NavOptions from './NavOptions';

export default function Nav() {
  // Stores which nav Link dropdown is onMouseEnter(ed)
  const [dropdownActive, setDropdownActive] = useState('none');
  return (
    <header
      className={`text-sm fixed top-0 left-0 right-0 z-50 `}
      onMouseLeave={() => setDropdownActive('none')}
    >
      <div className="nav-outer bg-white">
        <nav className="flex items-center justify-between h-24 text-dark-grey inner-container ">
          <div className="flex align-center">
            <Link href="/" onClick={() => setDropdownActive('none')}>
              <Image src={Logo} width={180} alt="logo" />
            </Link>
            <NavOptions
              dropdownActive={dropdownActive}
              setDropdownActive={setDropdownActive}
            />
          </div>
          <NavButtons setDropdownActive={setDropdownActive} />
        </nav>
      </div>
      <div
        className="border-t-2 overflow-hidden"
        onClick={() => setDropdownActive('none')}
      >
        <AnimatePresence key="animate">
          {dropdownActive !== 'none' && (
            <NavDropdown
              dropdownActive={dropdownActive}
              setDropdownActive={setDropdownActive}
            />
          )}
        </AnimatePresence>
        <NavDropdown
          dropdownActive="services"
          setDropdownActive={setDropdownActive}
        />
      </div>
    </header>
  );
}
