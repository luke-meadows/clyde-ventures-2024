import Image from 'next/image';

export default function OutstandingCareItem({ item }) {
  return (
    <div className="flex gap-4 mb-4">
      <div className="icon-wrapper bg-primary-orange">
        <Image src="/icons/tick.svg" width={28} height={28} />
      </div>
      <div>
        <h5 className="text-xl font-semibold pt-1.5 mb-2">{item.title}</h5>
        <p className="text-sm font-normal">{item.description}</p>
      </div>
    </div>
  );
}
