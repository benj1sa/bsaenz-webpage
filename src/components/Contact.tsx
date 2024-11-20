"use client";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newFormData = { ...formData };

    if (!formData.name.value) {
      newFormData.name.error = "Name is required";
      isValid = false;
    } else {
      newFormData.name.error = "";
    }

    if (!formData.email.value) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.value)) {
      newFormData.email.error = "Email is invalid";
      isValid = false;
    } else {
      newFormData.email.error = "";
    }

    if (!formData.message.value) {
      newFormData.message.error = "Message is required";
      isValid = false;
    } else {
      newFormData.message.error = "";
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here
    const templateParams = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
    }

    if (!validateForm()) {
      setFormError("Please fill out all fields correctly.");
      return;
    }

    emailjs.send('service_05n29wx', 'template_ee77l0f', templateParams, 'Xj-PyQzMPulwGaXiW')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData(defaultFormState);
      }, (error) => {
        console.log('FAILED...', error);
        setFormError("Failed to send mesage. Please try again later.");
      })
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
