import ArrowIcon from '@components/ArrowIcon';
import Image from 'next/image';
import Link from 'next/link';

export default function DropdownGrid({ item }) {
  return (
    <div className="border-[2px] border-medium-grey flex-1 card-rounding h-fit">
      {/* Card Top */}
      <Link
        href={item.url}
        className="card-top bg-black-text flex justify-between items-center py-3 pl-3"
      >
        <div className="card-top-left flex items-center gap-4 flex-1">
          <div className="bg-primary-orange h-14 w-14 aspect-square center-contents rounded-full text-lg cursor-pointer">
            <Image src={item.icon} width={30} height={30} />
          </div>
          <h3 className="font-semibold text-xl text-white">{item.title}</h3>
        </div>
        {!item.options && <ArrowIcon />}
      </Link>
      {/* Card Bottom */}
      <div
        className={
          'border-medium-grey bg-black ' + (item.options && 'border-t-2')
        }
      >
        {item.options &&
          item.options.map((option, i) => (
            <Link
              href={option.url}
              key={i * 777}
              className={
                'border-medium-grey flex items-center hover:bg-black-text ' +
                (item.options.length - 1 === i ? '' : 'border-b-2 ')
              }
            >
              <div className="px-3 py-2 flex-1">
                <h5 className="text-lg text-primary-orange">{option.title}</h5>
                {option.options && (
                  <div className="text-sm font-light flex flex-wrap items-center">
                    {option.options.map((subOption, i) =>
                      subOption === '|' ? (
                        <span
                          key={i * 120}
                          className="text-primary-orange px-2 leading-6"
                        >
                          |
                        </span>
                      ) : (
                        <p
                          href="/services/integration/salesforce/sales-cloud"
                          className="text-white"
                        >
                          {subOption}
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>
              <ArrowIcon />
            </Link>
          ))}
      </div>
    </div>
  );
}
