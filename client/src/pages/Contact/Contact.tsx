import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", form);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-teal-400 to-green-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-lg text-white mb-12">
          We’re here to answer any questions. Reach out to us, and we'll get
          back to you as soon as possible!
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 p-8 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Our Location
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              123 Turf Avenue, Kathmandu, Nepal
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Phone:</strong> +977 123 456 789
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> contact@turfnepal.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-600 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-600 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-600 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
