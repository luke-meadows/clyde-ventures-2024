import AnimationWrapper from '@components/AnimationWrapper';
import CrmToolkit from '@components/CrmToolkit';
import InfoBox from '@components/InfoBox';
import MainHero from '@components/MainHero';
import Image from 'next/image';
import InvestInSalesCloud from '@components/InvestInSalesCloud';
// import MoreSalesforceSolutions from '@components/MoreSalesforceSolutions';
import OutstandingCareSection from '@components/outstanding-customer-care/OutstandingCareSection';

export default function ServiceCloudPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="salesforce-service-cloud">
        <Image
          src="/images/sf-partner-logo-rectangle.png"
          width={200}
          height={100}
        />
      </MainHero>
      <div className="page-break" />
      <InfoBox infobox="service-cloud" />
      <div className="page-break" />
      <OutstandingCareSection />
      <div className="page-break" />
      <MoreSalesforceSolutions />
      <div className="page-break" />
    </AnimationWrapper>
  );
}
