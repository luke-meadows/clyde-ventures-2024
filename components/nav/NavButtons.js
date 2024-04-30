import MobileNavButton from '@components/MobileNavButton';
import Link from 'next/link';

export default function NavButtons({ setDropdownActive }) {
  return (
    <div
      className="nav-buttons flex items-center gap-4 "
      onMouseEnter={() => setDropdownActive('none')}
    >
      {/* Search Button */}
      {/* <div className="icon-wrapper bg-super-light-grey text-medium-grey transition ease-in-out delay-150">
        <i className="icon-search" />
      </div> */}
      {/* Linkedin Button */}
      <a
        href="https://www.linkedin.com/company/clyde-ventures"
        target="blank"
        className="icon-wrapper bg-linkedin-blue text-white"
      >
        <i className="icon-linkedin" />
      </a>
      {/* Contact Button */}
      <Link href="/contact" className="hidden lg:block">
        <button className="button">Contact us</button>
      </Link>
      <MobileNavButton />
    </div>
  );
}
