import AnimationWrapper from '@components/AnimationWrapper';
import CrmToolkit from '@components/CrmToolkit';
import InfoBox from '@components/InfoBox';
import MainHero from '@components/MainHero';
import SalesforceSolutions from '@components/SalesforceSolutions';
import Image from 'next/image';

export default function IntegrationPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="salesforce">
        <Image
          src="/images/sf-partner-logo-rectangle.png"
          width={200}
          height={100}
        />
      </MainHero>
      <div className="page-break" />
      <SalesforceSolutions />
    </AnimationWrapper>
  );
}
