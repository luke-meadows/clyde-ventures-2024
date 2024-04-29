// insight1
import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import Insight1Image from '@public/images/blog-images/thumbnail/consumer-standards-thumbnail.jpg';
import Image from 'next/image';
import ContactSection from '@components/contact/ContactSection';
import AvatarAndDate from '@components/AvatarAndDate';
import Link from 'next/link';

export default function page() {
  return (
    <AnimationWrapper>
      <MainHero hero="case-study">
        <h1 className="hero-title">Modern Slavery Statement</h1>
      </MainHero>
      <div className="inner-container font-normal">
        <div className="inner-terms">
          <h4 className="blog-title">Introduction:</h4>
          <p className=" mt-5 mb-5 pt-0 pb-0 break-words">
            Clyde Ventures Group has a zero tolerance approach to any form of
            modern slavery. We are committed to acting ethically and with
            integrity and transparency in all business dealings and to putting
            in place effective systems and controls to safeguard against any
            form of modern slavery taking place within the business or our
            supply chain.
          </p>
          <p className=" mt-5 mb-5 pt-0 pb-0 break-words">
            For the purposes of this policy, modern slavery encompasses slavery,
            servitude, human trafficking and forced labour, and is pursuant to
            section 54 of The Modern Slavery Act 2015, and this constitutes
            Clyde Venture&apos;s Group statement on modern slavery.
          </p>
          <h4 className="blog-title">Our Business:</h4>
          <p className=" mt-5 mb-5 pt-0 pb-0 break-words">
            Clyde Ventures Group is a multi-disciplinary consultancy business
            based in the UK. We recognise the importance of taking
            responsibility for ensuring a robust approach to slavery and human
            trafficking. We also understand that modern slavery and human
            trafficking are significant global issues presenting a challenge for
            businesses worldwide, and we are absolutely committed to preventing
            slavery and human trafficking in our corporate activities, and to
            ensuring that its supply chains are free from slavery and human
            trafficking.
          </p>
          <h4 className="blog-title">Supply Chain:</h4>
          <p className=" mt-5 mb-5 pt-0 pb-0 break-words">
            Our supply chain covers suppliers within and outside of the UK, and
            we expect all suppliers and contractors to uphold the same values as
            us in our zero tolerance approach to any form of modern slavery. We
            will refuse to deal with any supplier engaged in slavery or human
            trafficking or knowingly permit them to be carried out in any part
            of their business.
          </p>
          <ul className="text-base my-2 ml-5 mr-5 pl-0 xl:pl-5 pr-0 xl:pr-1 list-disc">
            <li className="text-base my-1 pt-0 pb-0">
              Identify and assess potential risk areas in our supply chains;
            </li>
            <li className="text-base my-1 pt-0 pb-0">
              Mitigate the risk of slavery and human trafficking occurring in
              our supply chains;
            </li>
            <li className="text-base my-1 pt-0 pb-0">
              Monitor potential risk areas in our supply chains; and
            </li>
            <li className="text-base my-1 pt-0 pb-0">
              Protect whistle blowers.
            </li>
          </ul>
          <br />
          <h4 className="blog-title">Training:</h4>
          <p className=" mt-5 mb-5 pt-0 pb-0 break-words">
            Regular training on this policy, and on the risk that the business
            faces from modern slavery in its supply chains, will be provided to
            staff as necessary, so that they know how to identify exploitation
            and modern slavery and how to report suspected cases. The
            group&apos;s zero tolerance approach to modern slavery must be
            communicated to all suppliers, contractors and other business
            partners when entering into new or renewed contracts with them.
          </p>
        </div>
      </div>
      <div className="page-break"></div>
      <ContactSection />
    </AnimationWrapper>
  );
}
