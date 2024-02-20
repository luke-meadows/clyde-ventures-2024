import AnimationWrapper from '@components/AnimationWrapper';
import InfoBox from '@components/InfoBox';
import MainHero from '@components/MainHero';
import CourseModules from '@components/education/CourseModules';
import Image from 'next/image';
import Link from 'next/link';

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
      <InfoBox infobox="mba">
        <Link href="/" className="button py-3 center-contents w-fit">
          Download Brochure
        </Link>
      </InfoBox>
      <div className="page-break" />
      <CourseModules />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
