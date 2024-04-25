export default function ContactSection() {
  return (
    <div className="inner-container bg-gray-100">
      <div className="page-break"></div>
      <div className="flex justify-between items-center gap-16">
        <div className="left w-1/2">
          <h5 className="text-4xl mb-6 ">Contact us</h5>
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
        <div className="right w-1/2 p-8 card-rounding bg-white">
          <h2 className="text-2xl font-semibold text-gray-700">
            We'd love to hear from you!
          </h2>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 ">
            Let's get in touch
          </h2>
          <form className="flex flex-col gap-2 ">
            <div className="flex gap-2">
              <input
                className="contact-form-input"
                type="text"
                placeholder="First Name (required)"
              />
              <input
                className="contact-form-input"
                type="text"
                placeholder="Surname (required)"
              />
            </div>
            <div className="flex gap-2">
              <input
                className="contact-form-input"
                type="text"
                placeholder="Email (required)"
              />
              <input
                className="contact-form-input"
                type="text"
                placeholder="Telephone (optional)"
              />
            </div>
            <div className="flex gap-2">
              <input
                className="contact-form-input"
                type="text"
                placeholder="Company (required)"
              />
              <select
                className="contact-form-input text-red-500"
                type="text"
                placeholder="Area of Interest"
              >
                <option className="">Choose one</option>
                <option className="">Consultancy</option>
                <option className="">Integration</option>
                <option className="">Education</option>
                <option className="">Other</option>
              </select>
            </div>
            <div className="w-full">
              <textarea
                className="font-normal border-2 border-gray-100 px-2 py-1 rounded w-full text-gray-700 text-sm"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="page-break"></div>
    </div>
  );
}
