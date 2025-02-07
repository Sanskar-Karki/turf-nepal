import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-0 bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Minimalist Contact Info */}
          <div className="bg-neutral-900 p-12 flex flex-col justify-center space-y-8 text-white">
            <div className="space-y-4">
              <h2 className="text-4xl font-extralight tracking-tight">
                Get in Touch
              </h2>
              <p className="text-neutral-400 text-lg">
                Connect with us. We're ready to bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7V3h-7c-.318 0-.63.014-.938.014A7.998 7.998 0 0111 4c-4.418 0-8 3.582-8 8s3.582 8 8 8z",
                  text: "+977 123 456 789",
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "contact@turfnepal.com",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                  text: "Kathmandu, Nepal",
                },
              ].map(({ icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon}
                    />
                  </svg>
                  <span className="text-neutral-300">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-12 bg-neutral-800">
            {submitted ? (
              <div className="text-center space-y-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 mx-auto text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-3xl font-light">Message Sent</h3>
                <p className="text-neutral-400">We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-neutral-400 mb-2 text-sm uppercase tracking-wide"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={form[id]}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-700 text-white px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-neutral-400 mb-2 text-sm uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-neutral-700 text-white px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
