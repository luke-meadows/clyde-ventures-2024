import Image from 'next/image';

export default function AvatarAndDate({ date, author, color = 'black' }) {
  const avatars = {
    'Ross Bern': '/images/team-images/avatars/circlular/ross-avatar.png',
    'Graham Mathie': '/images/team-images/avatars/circlular/graham-avatar.png',
    'Amber Morton': '/images/team-images/avatars/circlular/amber-avatar.png',
    'Kerry Moran': '/images/team-images/avatars/circlular/kerry-avatar.png',
    'David Philipson': '/images/team-images/avatars/circlular/dave-avatar.png',
  };
  return (
    <div className="flex items-center gap-4">
      <Image
        src={avatars[author]}
        className="rounded-full mb-2"
        height={60}
        width={60}
      />
      <p className={`font-normal text-sm mb-2 text-${color}`}>
        {author} - {date}
      </p>
    </div>
  );
}
