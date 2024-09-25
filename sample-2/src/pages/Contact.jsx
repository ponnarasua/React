import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';

const Contact = () => {
  const url = import.meta.env.VITE_CONTACT_API;
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value
    };
    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        alert('Message sent successfully!');
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
      }

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    
    <div className="container px-4 mx-auto justify-center items-center m-12">
      <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-neutral-700 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
              placeholder="Enter your name"
              type="text"
              name="name"
              ref={nameRef}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
              placeholder="Enter your Phone Number"
              name="phone"
              id="phone"
              type="tel"
              ref={phoneRef}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
              placeholder="Enter your Email ID"
              name="email"
              id="email"
              type="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
              rows="4"
              placeholder="Enter your message"
              name="message"
              id="message"
              ref={messageRef}
            ></textarea>
          </div>
          <button
            className="w-full bg-neutral-700 text-white py-2 px-4 rounded-lg hover:neutral-700transition duration-300"
            type="submit">Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;