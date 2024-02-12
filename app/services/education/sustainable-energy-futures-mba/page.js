import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import Image from 'next/image';

export default function EducationMBAPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="education-mba">
        <Image
          src="/images/strath-business-logo.png"
          width={200}
          height={100}
        />
      </MainHero>
    </AnimationWrapper>
  );
}
