import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import WhatWeDo from '@components/WhatWeDo';

export default function ServicesPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="services"></MainHero>
      <WhatWeDo />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
