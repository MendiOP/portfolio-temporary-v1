"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const {
      name: { value: nameValue },
      email: { value: emailValue },
      message: { value: messageValue },
    } = formData;

    const constructedMessage = `Name: ${nameValue}\nEmail: ${emailValue}\nMessage: ${messageValue}`;
    setLoading(true);

    try {
      const res = await emailjs.send(
        "portfolio_service_35",
        "template_xk0hsxu",
        {
          from_name: nameValue,
          from_email: emailValue,
          message: constructedMessage,
          to_name: "mehedihm2015@gmail.com",
        },
        "cfSIcIfrNtnRQSTkZ"
      );
      console.log("Email successfully sent!", res.text);

      console.log("totalMessage", constructedMessage);

      Swal.fire({
        title: "Good job!",
        text: "Email successfully sent!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });

      setLoading(false);
      setFormData(defaultFormState);

    } catch (error) {
      console.error("Something went wrong:", error);
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          required
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
          required
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
          required
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
        type="submit"
    className="w-full flex items-center justify-center px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
    >
  {loading ? (
    <>
      <div className="w-4 h-4 border-2 border-gray-300 border-t-2 border-t-gray-700 rounded-full animate-spin mr-2"></div>
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>


    </form>
  );
};
