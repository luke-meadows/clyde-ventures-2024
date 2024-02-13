export default function Statistic({ stat }) {
  return (
    <div className="border-l-4 border-black pl-4">
      <p className="text-3xl font-bold">{stat.figure}</p>
      <p className="max-w-[15ch] font-normal text-sm">{stat.description}</p>
    </div>
  );
}
