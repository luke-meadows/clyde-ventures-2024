import Image from 'next/image';

export default function BackgroundImage({ image }) {
  return (
    // Container must be position:relative;
    <div className="background-image absolute left-0 top-0 w-full h-full z-[-2] bg-black-text">
      <div className="background-image-inner h-full w-full brightness-[0.35]">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
