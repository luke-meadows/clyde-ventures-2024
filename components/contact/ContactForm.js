'use client';
import useForm from '@app/lib/useForm';
import Image from 'next/image';
import { useRef } from 'react';

export default function ContactForm() {
  const checkboxRef = useRef();
  const { inputs, handleChange, clearForm } = useForm({
    firstName: '',
    surname: '',
    email: '',
    company: '',
    telephone: '',
    interest: '',
    message: '',
  });
  function handleSelectChange(e) {
    console.log(e.target.value);
    if (e.target.value === 'Area of Interest (required)') {
      e.target.classList.remove('selected-value');
      e.target.classList.add('default-value');
    } else {
      e.target.classList.add('selected-value');
    }
    handleChange(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // prevent submit if checkbox unchecked
    if (!checkboxRef.current.checked) return;
    // prevent submit if area of interest not selected
    if (!inputs.interest || inputs.interest === 'Area of Interest (required)')
      return;

    // window.location.href = `https://go.clydeventures.com/l/1049802/2023-11-24/6r5?email=${inputs.email}&firstname=${inputs.firstName}&lastname=${inputs.surname}&company=${inputs.company}&phone=${inputs.telephone}&interest=${inputs.interest}&message=${inputs.message}`;
    clearForm();
  }

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
      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          <input
            className="contact-form-input"
            type="text"
            name="firstName"
            value={inputs.firstName}
            placeholder="First Name (required)"
            onChange={handleChange}
            required
          />
          <input
            className="contact-form-input"
            type="text"
            name="surname"
            value={inputs.surname}
            placeholder="Surname (required)"
            onChange={handleChange}
            required
          />
          <input
            className="contact-form-input"
            type="text"
            name="email"
            value={inputs.email}
            placeholder="Email (required)"
            onChange={handleChange}
            required
          />
          <input
            className="contact-form-input"
            name="telephone"
            value={inputs.telephone}
            placeholder="Telephone (optional)"
            type="tel"
            onChange={handleChange}
          />
          <input
            className="contact-form-input"
            type="text"
            name="company"
            value={inputs.company}
            placeholder="Company (required)"
            onChange={handleChange}
            required
          />
          <select
            className="font-normal border-2 border-gray-100 px-1 py-1 rounded w-full text-[16px] md:text-sm text-gray-400 focus:ring-blue-500"
            id="interest"
            name="interest"
            value={inputs.interest}
            placeholder="Area of Interest (required)"
            type="dropdown"
            onChange={handleSelectChange}
          >
            <option value="Area of Interest (required)">
              Area of Interest (required)
            </option>
            <option value="consultancy">Consultancy</option>
            <option value="integration">Integration</option>
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
            id=""
            cols="30"
            rows="10"
            name="message"
            value={inputs.message}
            placeholder="Type your message here"
            type="text"
            onChange={handleChange}
          ></textarea>
          <div className="flex items-center gap-4 pb-2 pt-1">
            <div className="checkbox-container">
              <input ref={checkboxRef} type="checkbox" className="checkbox" />
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
        <button type="submit" className="button w-full md:max-w-32">
          Send
        </button>
      </form>
    </div>
  );
}
