import CircleLogo from '@public/images/circle-logo.png';
import Image from 'next/image';

export default function HeroWrapper({ children }) {
  return (
    <div className="relative mb-[70px]">
      {children}
      <div className="floating-logo rounded-full h-24 w-24 bg-white absolute bottom-0 z-[1] translate-y-[50%] transform-center center-contents">
        <div className="relative w-[80%] ">
          <Image src={CircleLogo} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
