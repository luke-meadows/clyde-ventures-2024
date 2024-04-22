import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="about-us"></MainHero>
      <div className="inner-container">
        <h2 className="section-heading ">Our Story</h2>
        <p style={{ fontWeight: 400 }}>
          We recruit 90% of our staff from the most deprived 10% of postcodes
          and train them with the necessary skills and behaviours to work as
          professional management consultants. Many of our staff begin with no
          formal education but we are adept at identifying capability and
          developing potential. All of our staff own shares in the business.
          Consequently, we have a team that are engaged, loyal and keen to show
          our clients that our recruitment model works. We are on a mission to
          encourage all businesses to assess, build and develop talent like we
          do.
        </p>
      </div>
      <div className="page-break" />
      <div className="bg-black py-12">
        <div className="inner-container flex flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-bold text-4xl text-white">
              We are a living wage employer
            </h2>
            <div className="bg-primary-orange  rounded-full aspect-square h-fit flex items-center justify-center">
              <i className="icon-check text-black text-2xl" />
            </div>
          </div>
          <Image
            src="/images/accreditations-partners/living-wage-employer.png"
            width={150}
            height={150}
            className="mt-2"
          />
        </div>
      </div>
      <div className="page-break" />

      <div className="inner-container">
        <h2 className="section-heading ">Our Mission</h2>
        <p style={{ fontWeight: 400 }}>
          Creating social mobility by delivering top line growth for our
          clients. We teach people how to fish in new waters.
        </p>
      </div>

      <div className="page-break" />
      <div className="bg-gray-100">
        <div className="page-break" />
        <div className="inner-container">
          <h2 className="section-heading ">Our Vision</h2>
          <p style={{ fontWeight: 400 }}>
            Our Vision is to be the world's go-to consultancy for top line
            growth. We design and deliver propositions that connect the essence
            of a business with new markets, people and investors. Our circular
            propositions will take your business into new markets and attract
            the brightest people.
          </p>
        </div>
        <div className="page-break" />
      </div>
    </AnimationWrapper>
  );
}
