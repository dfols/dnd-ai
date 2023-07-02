"use client";

import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/signup", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      console.log("success");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="relative p-10 space-y-4 bg-white rounded shadow-lg w-3/4"
      >
        <h1 className="orange_gradient text-center text-4xl font-bold mb-10">
          Sign Up
        </h1>
        <div className="flex flex-col space-y-5">
          {/* Input Fields */}
          <div className="flex space-x-4 justify-center">
            <label htmlFor="username" className="w-1/4">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="border p-2 w-3/4"
            />
          </div>
          <div className="flex space-x-4 justify-center">
            <label htmlFor="password" className="w-1/4">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border p-2 w-3/4"
            />
          </div>
          <div className="flex space-x-4 content-center">
            <label htmlFor="email" className="w-1/4">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 w-3/4"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
