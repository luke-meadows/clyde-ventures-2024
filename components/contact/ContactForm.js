import Image from 'next/image';

export default function ContactForm() {
  return (
    <div className="right w-full md:w-1/2 py-8 md:py-4 px-4 md:px-8 card-rounding bg-white border-2 border-gray-200 shadow-bottom">
      <div className="flex gap-4 mb-6 items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Let's get in touch, we'd love to hear from you!
        </h2>
        <div className="image ">
          <Image src="/images/circle-logo.png" height={70} width={70} />
        </div>
      </div>
      <form action="">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
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
          <input
            className="contact-form-input"
            type="text"
            placeholder="Company (required)"
          />
          <select
            className="font-normal border-2 border-gray-100 px-1 py-1 rounded w-full text-[16px] md:text-sm text-gray-400 focus:ring-blue-500"
            type="text"
            id="interest"
          >
            <option disabled selected value="" className="text-gray-400">
              Interested in (required)
            </option>
            <option className="" value="consultancy">
              Consultancy
            </option>
            <option className="" value="integration">
              Integration
            </option>
            <option className="" value="education">
              Education
            </option>
            <option className="" value="other">
              Other
            </option>
          </select>
        </div>

        <div className="w-full">
          <textarea
            className="font-normal border-2 border-gray-100 px-2 py-1 rounded w-full text-gray-700 text-[16px] md:text-sm mt-2"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div className="flex items-center gap-4 pb-2 pt-1">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" />
            </div>
            <p className="text-xs font-normal">
              I confirm I accept the Clyde Ventures{' '}
              <a
                href="https://www.clydeventures.com/privacy-policy"
                target="blank"
              >
                privacy policy
              </a>{' '}
              <span style={{ color: 'red' }}>*</span>
            </p>
          </div>
        </div>
        <button className="button w-full md:max-w-32">Send</button>
      </form>
    </div>
  );
}
