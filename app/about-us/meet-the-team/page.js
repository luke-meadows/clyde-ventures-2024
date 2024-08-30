import AnimationWrapper from '@components/AnimationWrapper';
import MainHero from '@components/MainHero';
import { teamData } from '@app/lib/teamData';
import Image from 'next/image';
import ContactSection from '@components/contact/ContactSection';
export const metadata = {
  title: 'Clyde Ventures - Meet the Team',
  description:
    'Get to know the dynamic team at Clyde Ventures, including our experienced leaders and dedicated professionals who drive our success.',
};
export default function TeamPage() {
  return (
    <AnimationWrapper>
      <MainHero hero="meet-the-team" />
      <div className="inner-container">
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 auto-rows-fr-1 gap-6">
          {teamData.map((item, i) => (
            <div
              className="shadow-button  w-[100%] col-span-1 noselect rounded overflow-hidden"
              // onClick={() => setActiveTeamMember(item)}
            >
              <Image
                key={i}
                src={item.image}
                className="h-[400px] md:h-[500px] object-cover object-top w-[100%] rounded-t"
                objectPosition="bottom"
              />
              <div className="px-2 py-1 bg-primary-orange">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="font-light">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="page-break"></div>
      </div>
      <ActiveTeamMember />
      <ContactSection />
    </AnimationWrapper>
  );
}
