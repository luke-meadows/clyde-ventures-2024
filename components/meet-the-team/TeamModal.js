import Image from 'next/image';

export default function TeamModal({ activeTeamMember, setActiveTeamMember }) {
  return (
    <div>
      <div
        className="fixed z-30 left-0 top-0 bg-black h-[100vh] w-[100vw] opacity-70 cursor-pointer"
        onClick={() => setActiveTeamMember(null)}
      />
      <div className="inner-modal max-h-[80%] w-[80%] max-w-[1250px] bg-white opacity-100 fixed z-40 left-1/2 top-1/2 translate-y-[-45%] translate-x-[-50%] p-8 rounded-md overflow-hidden">
        <div className="modal-top flex justify-between mb-6">
          <div>
            <div className="flex gap-6">
              <h1 className="font-bold text-4xl mb-2">
                {activeTeamMember.name}
              </h1>
              <a
                href={activeTeamMember.linkedIn}
                target="blank"
                className="icon-wrapper bg-linkedin-blue text-white"
              >
                <i className="icon-linkedin" />
              </a>
            </div>
            <p className="text-lg">{activeTeamMember.role}</p>
          </div>
          <button className="button" onClick={() => setActiveTeamMember(null)}>
            Close <i className="icon-cancel" />
          </button>
        </div>
        <div className="flex gap-8">
          <Image
            src={activeTeamMember.image}
            width={400}
            className="object-cover h-[500px]"
          />
          <div className="pb-8 max-h-contain overflow-y-scroll">
            {activeTeamMember.description.map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
