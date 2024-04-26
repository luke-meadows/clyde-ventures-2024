export default function ContactForm() {
  return (
    <div className="right w-full md:w-1/2 p-8 card-rounding bg-white border-2 border-gray-200 shadow-bottom">
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
            <option className="">Interested in (required)</option>
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
  );
}
