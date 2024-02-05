import Link from 'next/link';

export default function DropdownLink({
  children,
  dropdownOption = 'none',
  href,
  setDropdownActive,
  dropdownActive,
}) {
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
}
