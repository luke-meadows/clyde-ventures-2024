import Link from 'next/link';
import NavButtons from './nav/NavButtons';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className=" bg-black text-white pt-16">
        <div className="inner-container">
          <div className="flex-col md:flex-row flex gap-16">
            <div className="flex-1">
              <h5 className="mb-2 underline-offset-2 underline">Contact Us</h5>
              <div className="text-xs font-normal flex flex-col gap-1">
                <p>help@clydeventures.com</p>
                <p>0141 375 1472</p>
                <p className="max-w-[37ch]">
                  Suite 405-407, Baltic Chambers, 50 Wellington Street, Glasgow,
                  G2 6HJ.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 underline-offset-2 underline">Quick Links</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/">About Us</Link>
                <Link href="/">Sectors</Link>
                <Link href="/">Insights</Link>
                <Link href="/">Case Studies</Link>
                <Link href="/">Contact Us</Link>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 underline-offset-2 underline">Services</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/">Consultancy</Link>
                <Link href="/">Integration</Link>
                <Link href="/">Education</Link>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 underline-offset-2 underline">Policies</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/">Privacy Statement</Link>
                <Link href="/">Modern Slavery Statement</Link>
                <Link href="/">Carbon Accounting</Link>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="logos flex items-center">
              {/* <div className="bg-white p-1 rounded flex items-center justify-center h-fit">
                <Image
                  src="/images/logo.png"
                  height={85}
                  width={165}
                  className="object-contain"
                />
              </div> */}
              <Image
                src="/images/sf-partner-logo-square.png"
                height={110}
                width={80}
                className="object-contain mr-2"
              />
              <Image
                src="/images/accreditations-partners/CfA Cert Logo White UKAS ISO 9001.png"
                height={50}
                width={158}
              />
              <Image
                src="/images/accreditations-partners/CfA Cert Logo White UKAS ISO 14001.png"
                height={50}
                width={158}
              />
              <Image
                src="/images/accreditations-partners/CfA Cert Logo White UKAS ISO 27001.png"
                height={50}
                width={158}
              />
            </div>
            <div className="linkedin items-center flex gap-2">
              <div className="icon-wrapper bg-primary-orange">
                <i className="icon-mail-alt text-black" />
              </div>
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
        <div className="border-gray-500 border-t-[1px] py-2">
          <div className="inner-container">
            <p className="text-xs font-light">
              © Clyde Ventures 2022 | Registered in Scotland: SC723600
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
