import { dropdownDirectory } from '@app/lib/dropdownDirectory';
import Image from 'next/image';
import Link from 'next/link';
import DropdownGrid from './nav/DropdownGrid';

export default function WhatWeDo() {
  return (
    <div className="inner-container">
      <h2 className="section-heading text-center text-black-text">
        What we do
      </h2>
      <p className="section-subheading">
        Place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text place holder text
        place holder text place holder text place holder text.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {dropdownDirectory.services.map((item, i) => (
          <DropdownGrid item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
