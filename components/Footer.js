import Link from 'next/link';
import NavButtons from './nav/NavButtons';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className="bg-black text-white pt-16 pb-8 ">
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
          <div className="flex justify-between items-end mt-6">
            <div className="logos flex gap-4 items-center">
              {/* <div className="bg-white p-1 rounded flex items-center justify-center h-fit">
                <Image
                  src="/images/logo.png"
                  height={85}
                  width={165}
                  className="object-contain"
                />
              </div> */}
              <Image
                src="/images/sf-partner-logo-rectangle.png"
                height={110}
                width={185}
                className="object-contain mr-2"
              />
              <Image
                src="/images/accreditations-partners/CfA Cert Logo White UKAS ISO 9001.png"
                height={40}
                width={120}
              />
              <Image
                src="/images/accreditations-partners/CfA Cert Logo White UKAS ISO 14001.png"
                height={40}
                width={120}
              />
              <Image
                src="/images/accreditations-partners/CfA Cert Logo White UKAS ISO 27001.png"
                height={40}
                width={120}
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
    </div>
  );
}
