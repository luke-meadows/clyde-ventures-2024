import Link from 'next/link';

export default function MobileNav() {
  return (
    <div className="absolute left-0 bottom-0 translate-y-[100%] bg-white w-[100vw] h-[100vh] text-left border-t-8 border-primary-orange pt-4 px-4">
      <nav>
        <Link
          href="/services"
          className="text-xl font-semibold flex items-center"
        >
          Services <i className="icon-angle-right text-sm" />
        </Link>
        <div className="ml-2 flex flex-col">
          <Link
            className="underline underline-offset-2 text-sm"
            href="/services/integration"
          >
            Integration <i className="icon-angle-right text-xs" />
          </Link>
          <Link
            className="underline underline-offset-2 text-sm"
            href="/services/consultancy"
          >
            Consultancy <i className="icon-angle-right text-xs" />
          </Link>
          <Link
            className="underline underline-offset-2 text-sm"
            href="/services/education/sustainable-energy-futures-mba"
          >
            Education <i className="icon-angle-right text-xs" />
          </Link>
        </div>
        <div className="mt-3"></div>
        <h5 className="text-xl font-semibold flex items-center">
          About Clyde Ventures
        </h5>
        <div className="ml-2 flex flex-col">
          <Link
            className="underline underline-offset-2 text-sm"
            href="/about-us"
          >
            About us <i className="icon-angle-right text-xs" />
          </Link>
          <Link
            className="underline underline-offset-2 text-sm"
            href="/about-us/meet-the-team"
          >
            Meet the Team <i className="icon-angle-right text-xs" />
          </Link>
        </div>
        <div className="mt-3"></div>

        <h5 href="/" className="text-xl font-semibold flex items-center">
          Sectors
        </h5>
        <div className="ml-2 flex flex-col">
          <Link
            className="underline underline-offset-2 text-sm"
            href="/sectors/utilities"
          >
            Utilities <i className="icon-angle-right text-xs" />
          </Link>
          <Link
            className="underline underline-offset-2 text-sm"
            href="/sectors/technology"
          >
            Technology <i className="icon-angle-right text-xs" />
          </Link>
          <Link
            className="underline underline-offset-2 text-sm"
            href="/sectors/professional-services"
          >
            Professional Services <i className="icon-angle-right text-xs" />
          </Link>
        </div>
        <div className="mt-3"></div>

        <Link
          href="/insights"
          className="text-xl font-semibold flex items-center"
        >
          Insights <i className="icon-angle-right text-sm" />
        </Link>
        <div className="mt-3"></div>

        <Link
          href="/case-studies"
          className="text-xl font-semibold flex items-center"
        >
          Case Studies <i className="icon-angle-right text-sm" />
        </Link>
        <div className="mt-3"></div>

        <Link
          href="/contact"
          className="text-xl font-semibold flex items-center"
        >
          Contact us <i className="icon-angle-right text-sm" />
        </Link>
      </nav>
      <div className="mt-5"></div>

      <div className="rounded-md flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="icon-wrapper bg-primary-orange">
            <i className="icon-mail-alt text-black" />
          </div>
          <p className="text-sm">help@clydeventures.com</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="icon-wrapper bg-primary-orange">
            <i className="icon-phone text-black text-xl" />
          </div>
          <p className="text-sm">0141 375 1472</p>
        </div>
      </div>
    </div>
  );
}
