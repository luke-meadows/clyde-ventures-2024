import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <div className="inner-container bg-gray-100">
      <div className="page-break"></div>
      <div className="flex justify-between items-center gap-16">
        <div className="left w-1/2">
          <h5 className="text-4xl mb-6 section-heading">Contact us</h5>
          <p className="max-w-[50ch]">
            We&apos;re always here to help. Whether you have inquiries,
            feedback, or just want to connect, don&apos;t hesitate to reach out.
          </p>
          <div className="flex mt-6 items-center gap-4">
            <div className="icon-wrapper bg-primary-orange">
              <i className="icon-mail text-black" />
            </div>
            <p className="text-normal">help@clydeventures.com</p>
          </div>
          <div className="flex mt-6 items-center gap-4">
            <div className="icon-wrapper bg-primary-orange">
              <i className="icon-mail text-black" />
            </div>
            <p className="text-normal">
              0141 375 1472{' '}
              <span className="text-red-500">**need to change icon</span>
            </p>
          </div>
          <div className="flex mt-6 items-center gap-4">
            <div className="icon-wrapper bg-primary-orange">
              <i className="icon-location text-black" />
            </div>
            <p className="text-normal">
              Suite 405-407, Baltic Chambers, 50 Wellington Street, Glasgow, G2
              6HJ.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="page-break"></div>
    </div>
  );
}
