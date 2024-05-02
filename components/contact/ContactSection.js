import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <div className="bg-gray-100">
      <div className="inner-container-2">
        <div className="page-break"></div>
        <div className="flex-col md:flex-row flex justify-between items-center gap-16">
          <div className="left w-full md:w-1/2 p-4 md:p-0">
            <h5 className="text-4xl mb-6 section-heading">Contact us</h5>
            <p className="max-w-[50ch]">
              We&apos;re always here to help. Whether you have inquiries,
              feedback, or just want to connect, don&apos;t hesitate to reach
              out.
            </p>
            <div className="flex mt-6 items-center gap-4">
              <div className="icon-wrapper bg-primary-orange">
                <i className="icon-mail-alt text-black" />
              </div>
              <p className="text-normal">help@clydeventures.com</p>
            </div>
            <div className="flex mt-6 items-center gap-4">
              <div className="icon-wrapper bg-primary-orange">
                <i className="icon-phone text-black text-xl" />
              </div>
              <p className="text-normal">0141 375 1472</p>
            </div>
            <div className="flex mt-6 items-center gap-4">
              <div className="icon-wrapper bg-primary-orange">
                <i className="icon-location text-black text-xl" />
              </div>
              <p className="text-normal">
                Suite 405-407, Baltic Chambers, 50 Wellington Street, Glasgow,
                G2 6HJ.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="page-break hidden md:block"></div>
      </div>
    </div>
  );
}
