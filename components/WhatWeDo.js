import { dropdownDirectory } from '@app/lib/dropdownDirectory';
import Image from 'next/image';
import Link from 'next/link';
import DropdownGrid from './nav/DropdownGrid';

export default function WhatWeDo() {
  return (
    <div>
      <div className="inner-container">
        <h2 className="section-heading text-center text-black-text">
          What we do
        </h2>
        <p className="section-subheading">
          We provide expertise with innovation to empower businesses navigating
          the dynamic landscape of technology integration, sustainable energy
          and business growth. Find out how Clyde Ventures can transform your
          organisation below.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-6 md:p-0 gap-6 max-w-[1300px] mx-auto md:px-8 bg-black md:bg-white">
        {dropdownDirectory.services.map((item, i) => (
          <DropdownGrid item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
