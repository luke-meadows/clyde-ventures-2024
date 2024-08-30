import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
export const metadata = {
  title: 'Clyde Ventures - FRP Manufacturing Services',
  description:
    'Discover how Clyde Ventures offers specialized FRP services to enhance efficiency and innovation in the manufacturing sector.',
};

export default function FrpPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="process-design"></MainHero>
      <div className="mt-24">Manufacturing - FRP</div>
    </AnimationWrapper>
  );
}
