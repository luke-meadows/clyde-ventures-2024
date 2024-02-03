'use client';
import Image from 'next/image';
import Logo from '@public/images/logo.png';
import Link from 'next/link';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import NavDropdown from './NavDropdown';

export default function Nav() {
  // Stores which nav Link dropdown is onMouseEnter(ed)
  const [dropdownActive, setDropdownActive] = useState('none');

  // Options for the dropdown

  // Nav Link component variation for Links that trigger dropdown to open
  const DropdownLink = ({ children, dropdownOption = 'none', href }) => {
    return (
      <Link
        href={href}
        onMouseEnter={() => setDropdownActive(dropdownOption)}
        className={
          'h-full center-contents ' +
          (dropdownOption === dropdownActive && 'underline underline-offset-4')
        }
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`text-sm fixed top-0 left-0 right-0 z-50 `}
      onMouseLeave={() => setDropdownActive('none')}
    >
      {/* // Main component */}
      <div className="nav-outer bg-white">
        <nav className="flex items-center justify-between h-24 text-dark-grey inner-container ">
          <div className="flex align-center">
            {/* Logo */}
            <Link href="/" onClick={() => setDropdownActive('none')}>
              <Image src={Logo} width={180} alt="logo" />
            </Link>
            {/* Nav Links */}
            <ul className="ml-16 flex items-center gap-4">
              <DropdownLink href="/services" dropdownOption="services">
                Services <i className="icon-angle-down" />
              </DropdownLink>
              <DropdownLink href="/about-us" dropdownOption="about-us">
                About Us <i className="icon-angle-down" />
              </DropdownLink>
              <DropdownLink href="/industries" dropdownOption="industries">
                Industries <i className="icon-angle-down" />
              </DropdownLink>
              <Link
                href="/insights"
                onMouseEnter={() => setDropdownActive('none')}
                className=""
              >
                Insights <span className="mx-[6px]" />
              </Link>
              <Link
                href="/case-studies"
                onMouseEnter={() => setDropdownActive('none')}
                className=""
              >
                Case Studies <span className="mx-[6px]" />
              </Link>
            </ul>
          </div>

          {/* Nav Buttons */}
          <div
            className="nav-buttons flex items-center gap-4 "
            onMouseEnter={() => setDropdownActive('none')}
          >
            {/* Search Button */}
            <div className="icon-wrapper bg-super-light-grey text-medium-grey transition ease-in-out delay-150">
              <i className="icon-search" />
            </div>
            {/* Linkedin Button */}
            <a
              href="https://www.linkedin.com/company/clyde-ventures"
              target="blank"
              className="icon-wrapper bg-linkedin-blue text-white"
            >
              <i className="icon-linkedin" />
            </a>

            {/* Contact Button */}
            <Link href="/contact">
              <button className="button">Contact us</button>
            </Link>
          </div>
        </nav>
      </div>
      {/* Nav Dropdown */}
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
        {/* <NavDropdown
          dropdownActive="services"
          setDropdownActive={setDropdownActive}
        /> */}
      </div>
    </header>
  );
}
