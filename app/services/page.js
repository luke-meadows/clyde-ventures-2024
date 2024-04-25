import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import WhatWeDo from '@components/WhatWeDo';
import ContactSection from '@components/contact/ContactSection';

export default function ServicesPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="services"></MainHero>
      <WhatWeDo />
      <div className="page-break" />
      <ContactSection />
    </AnimationWrapper>
  );
}
