'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeroNavigationStrip() {
  const pathName = usePathname();
  const splitPathName = pathName.split('/').slice(1);

  const wordsToChangeCase = {
    crm: 'CRM',
    wacc: 'WACC',
    opex: 'OPEX',
    and: 'and',
    mba: 'MBA',
    independence: 'Independence,',
    upskilling: 'Upskilling and',
  };

  const formatNavString = (string) => {
    const regex = /-/g;
    return string
      .replace(regex, ' ')
      .split(' ')
      .map((item) =>
        wordsToChangeCase[item]
          ? wordsToChangeCase[item]
          : `${item.charAt(0).toUpperCase()}${item.slice(1)}`
      )
      .join(' ');
  };

  const returnNavHref = (i) =>
    pathName
      .split('/')
      .slice(0, -1)
      .slice(0, i + 2)
      .join('/');

  return (
    <div className=" bg-black text-off-white w-full py-3 text-sm">
      <div className="inner-container w-full flex gap-4">
        {splitPathName.map((item, i) =>
          i === splitPathName.length - 1 ? (
            <p className="text-primary-orange">{formatNavString(item)}</p>
          ) : (
            <Link href={returnNavHref(i)} className="flex items-center">
              <p className="underline underline-offset-4">
                {formatNavString(item)}
              </p>
              <i className="icon-angle-right ml-2 mr-[-8px]" />
            </Link>
          )
        )}
      </div>
    </div>
  );
}
