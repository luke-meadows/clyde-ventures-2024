import Link from 'next/link';
import NavButtons from './nav/NavButtons';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <div className=" bg-black text-white pt-6 md:pt-16">
        <div className="inner-container">
          <div className="flex-col md:flex-row flex gap-8 md:gap-16">
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
                <Link href="/about-us">About us</Link>
                <Link href="/about-us/meet-the-team">Meet the team</Link>
                <Link href="/insights">Insights</Link>
                <Link href="/case-studies">Case Studies</Link>
                <Link href="/contact">Contact Us</Link>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 underline-offset-2 underline">Services</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/services/consultancy">Consultancy</Link>
                <Link href="/services/integration">Integration</Link>
                <Link href="/services/education/sustainable-energy-futures-mba">
                  Education
                </Link>
              </ul>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 underline-offset-2 underline">Policies</h5>
              <ul className="text-xs font-normal flex flex-col gap-1">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/modern-slavery-statement">
                  Modern Slavery Statement
                </Link>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://go.clydeventures.com/l/1049802/2024-04-23/5hqy/1049802/1713861915hAcJzvpp/Clyde_Ventures_Carbon_Accounting_PDF.pdf"
                >
                  Carbon Accounting
                </a>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-end mt-6 mb-6">
            <div className="logos grid grid-cols-2 md:flex items-center ml-[-10px] gap-4">
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
              <Image
                src="/images/sf-partner-logo-square.png"
                height={110}
                width={90}
                className="object-contain"
              />
            </div>
            <div className="linkedin items-center flex gap-2 ">
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
            <p className="text-xs font-light text-right">
              © Clyde Ventures 2022 | Registered in Scotland: SC723600
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
