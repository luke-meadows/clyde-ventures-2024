import AnimationWrapper from '@components/AnimationWrapper';
import CrmToolkit from '@components/CrmToolkit';
import InfoBox from '@components/InfoBox';
import MainHero from '@components/MainHero';
import Image from 'next/image';

export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="salesforce-sales-cloud">
        <Image
          src="/images/sf-partner-logo-rectangle.png"
          width={200}
          height={100}
        />
      </MainHero>
      <div className="page-break" />
      <InfoBox />
      <div className="page-break" />
      <CrmToolkit />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
