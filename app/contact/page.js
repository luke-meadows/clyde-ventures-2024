import AnimationWrapper from '@components/AnimationWrapper';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - Contact Us',
  description:
    'If you have any questions, or would like to get in touch with Clyde Ventures, find our contact information and reach out to us here.',
};
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
