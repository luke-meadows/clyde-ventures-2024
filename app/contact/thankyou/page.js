import AnimationWrapper from '@components/AnimationWrapper';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
import Image from 'next/image';
export const metadata = {
  title: 'Clyde Ventures - Thank You',
  description:
    'Thank you for reaching out to Clyde Ventures. We will get back to you as soon as possible.',
};
export default function ContactPage() {
  return (
    <AnimationWrapper>
      <div className="inner-container-2">
        <div className="page-break"></div>
        <div className="flex items-center text-center flex-col">
          <Image src="/images/success.png" width={100} height={100} />
          <h1 className="section-heading mt-8">Thank you </h1>
          <p className="section-subheading">
            Thank you for reaching out to Clyde Ventures. We will get back to
            you as soon as possible.
          </p>
        </div>
        <div className="page-break hidden md:block"></div>
      </div>
    </AnimationWrapper>
  );
}
