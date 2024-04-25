import '@styles/globals.css';
import HomepageHeroSwiper from '@components/HomepageHeroSwiper';
import WhatWeDo from '@components/WhatWeDo';
import IndustriesSection from '@components/IndustriesSection';
import AnimationWrapper from '@components/AnimationWrapper';
import WhyChooseClyde from '@components/WhyChooseClyde';
import ContactSection from '@components/contact/ContactSection';

export default function Home() {
  return (
    <AnimationWrapper>
      <HomepageHeroSwiper />
      <WhatWeDo />
      <div className="page-break" />
      <IndustriesSection />
      <div className="page-break" />
      <WhyChooseClyde />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
