import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { useTheme } from "next-themes";

const ContactForm = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Remove the validation error for the field being updated if it's now valid
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "firstName" && value) {
        delete newErrors.firstName;
      }
      if (name === "email" && /\S+@\S+\.\S+/.test(value)) {
        delete newErrors.email;
      }
      if (name === "message" && value) {
        delete newErrors.message;
      }
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      emailjs
        .send(
          "service_6xnt1gi", // Replace with your EmailJS service ID
          "template_vhzfolt", // Replace with your EmailJS template ID
          formData,
          "TuTVfA6FOPiVy9VkA" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            setSuccess(true);
            setIsSubmitting(false);
            setFormData({
              firstName: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setError("Something went wrong. Please try again.");
            setIsSubmitting(false);
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="mt-16 p-4 laptop:p-4">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className={`text-3xl font-bold tracking-tight sm:text-4xl ${
            mounted && theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Get in Touch
        </h2>

        <p
          className={`mt-2 text-lg leading-8 ${
            mounted && theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
 I&apos;m always open to discussing new projects, creative ideas, or
  opportunities to be part of your visions. Feel free to reach out to
  me.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className={`block text-sm font-semibold leading-6 ${
                mounted && theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400
                  ${
                    mounted && theme === "dark"
                      ? "text-white ring-gray-600"
                      : "text-gray-900 ring-gray-300"
                  }
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 
                  ${
                    errors.firstName
                      ? mounted && theme === "dark"
                        ? "ring-red-500"
                        : "ring-red-500"
                      : ""
                  }
                `}
              />
              {errors.firstName && (
                <p
                  className={`text-sm mt-1 ${
                    mounted && theme === "dark"
                      ? "text-red-400"
                      : "text-red-600"
                  }`}
                >
                  {errors.firstName}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className={`block text-sm font-semibold leading-6 ${
                mounted && theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  mounted && theme === "dark"
                    ? "text-white ring-gray-600"
                    : "text-gray-900 ring-gray-300"
                } ${errors.email ? "ring-red-500" : ""}`}
              />
              {errors.email && (
                <p
                  className={`text-sm mt-1 ${
                    mounted && theme === "dark"
                      ? "text-red-400"
                      : "text-red-600"
                  }`}
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className={`block text-sm font-semibold leading-6 ${
                mounted && theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  mounted && theme === "dark"
                    ? `text-white ring-gray-600 ${
                        errors.message ? "ring-red-500" : ""
                      }`
                    : `text-gray-900 ring-gray-300 ${
                        errors.message ? "ring-red-500" : ""
                      }`
                }`}
              ></textarea>
              {errors.message && (
                <p
                  className={`text-sm mt-1 ${
                    mounted && theme === "dark"
                      ? "text-red-500"
                      : "text-red-600"
                  }`}
                >
                  {errors.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
        {success && (
          <p className="mt-4 text-green-600">
            Your message has been sent successfully!
          </p>
        )}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
      <div className="flex justify-center mt-10">
        <Socials />
      </div>
    </div>
  );
};

export default ContactForm;
