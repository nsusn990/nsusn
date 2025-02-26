"use client";

import { insertData } from "@/app/api/dataAritable";
import { Button } from "@/components/ui/button";
// Removed unused import
import React, { useState } from "react";

type FormDataValues = {
  name: string;
  email: string;
  companyname: string;
  linkedin: string;
  description: string;
};

function CofunderReg() {
  const [formData, setFormData] = useState<FormDataValues>({
    name: "",
    email: "",
    companyname: "",
    linkedin: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submitReg(event: React.FormEvent) {
    event.preventDefault();

    // Simple validation check
    if (!formData.name || !formData.email) {
      setErrorMessage("Name and Email are required fields!");
      return;
    }

    setErrorMessage(null); // Reset error message

    // Log form data
    console.log(formData);
    insertData({
      name: formData.name,
      email: formData.email,
      companyName: formData.companyname,
      linkedin: formData.linkedin,
      description: formData.description,
    });
  }

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-4">Register Here</h1>
      <form onSubmit={submitReg}>
        <div className="flex flex-col gap-4">
          <div className="flex-col flex gap-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              className="w-64 p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" flex gap-3 items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address*"
              className="w-64 p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" flex gap-3 items-center">
            <input
              type="text"
              name="companyname"
              id="companyname"
              placeholder="Company Name"
              className="w-64 p-2 border border-gray-300 rounded-md"
              value={formData.companyname}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" flex gap-3 items-center">
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              placeholder="Linkedin Profile"
              className="w-64 p-2 border border-gray-300 rounded-md"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-3 items-center">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="w-64 p-2 border border-gray-300 rounded-md"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div>
            <Button variant={"red"} className="w-64 text-white">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CofunderReg;
