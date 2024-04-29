import Link from 'next/link';
import DropdownLink from './DropdownLink';

export default function NavOptions({ dropdownActive, setDropdownActive }) {
  return (
    <ul className="hidden md:flex ml-16 items-center gap-4">
      <DropdownLink
        href="/services"
        dropdownOption="services"
        setDropdownActive={setDropdownActive}
        dropdownActive={dropdownActive}
        onClick={() => setDropdownActive(false)}
      >
        Services <i className="icon-angle-down" />
      </DropdownLink>
      <p
        href="/about-us"
        dropdownOption="about-us"
        className={
          'h-full center-contents select-none ' +
          (dropdownActive === 'about-us' && 'underline underline-offset-4')
        }
        onMouseEnter={() => setDropdownActive('about-us')}
      >
        About Us <i className="icon-angle-down" />
      </p>
      <DropdownLink
        href=""
        dropdownOption="sectors"
        setDropdownActive={setDropdownActive}
        dropdownActive={dropdownActive}
      >
        Sectors <i className="icon-angle-down" />
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
  );
}
