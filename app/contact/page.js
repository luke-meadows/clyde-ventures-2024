import AnimationWrapper from '@components/AnimationWrapper';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <AnimationWrapper>
      <ContactSection />
      <div className="page-break"></div>
      <WhyChooseClyde />
      <div className="page-break"></div>
    </AnimationWrapper>
  );
}
