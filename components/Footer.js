import Link from 'next/link';
import NavButtons from './nav/NavButtons';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="page-break"></div>
      <div className="bg-black text-white pt-16 pb-8">
        <div className="inner-container">
          <div className="grid grid-cols-3 gap-16">
            <div>
              <h5 className="mb-4">Contact Us</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <li>help@clydeventures.com</li>
                <li>0141 375 1472</li>
                <li>
                  Suite 405-407, Baltic Chambers, 50 Wellington Street, Glasgow,
                  G2 6HJ.
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Quick Links</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/">About Us</Link>
                <Link href="/">Sectors</Link>
                <Link href="/">Insights</Link>
                <Link href="/">Case Studies</Link>
                <Link href="/">Contact Us</Link>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Services</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/">Consultancy</Link>
                <Link href="/">Integration</Link>
                <Link href="/">Education</Link>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-end mt-4">
            <div className="logos flex gap-6">
              <div className="bg-white px-2 rounded flex items-center justify-center">
                <Image src="/images/logo.png" height={90} width={125} />
              </div>
              <Image
                src="/images/sf-partner-logo-rectangle.png"
                height={80}
                width={150}
              />
            </div>
            <div className="linkedin flex gap-6">
              <a
                href="https://www.linkedin.com/company/clyde-ventures"
                target="blank"
                className="icon-wrapper bg-linkedin-blue text-white"
              >
                <i className="icon-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
