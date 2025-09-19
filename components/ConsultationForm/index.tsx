"use client";
import { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: "Consultation request",
        source: "Consultation Form",
      }),
    });

    const data = await res.json();
    setStatus(data.message);

    if (res.ok) setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-y-6 mt-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900 outline-none placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900 outline-none placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900 outline-none placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
      />
      <div className="pt-2">
        <button
          type="submit"
          className="w-full flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary dark:hover:bg-primary/80"
        >
          Get Your Free Consultation Now
        </button>
      </div>
      {status && <p className="text-center text-body-color dark:text-gray-100 mt-2">{status}</p>}
    </form>
  );
};

export default ConsultationForm;
