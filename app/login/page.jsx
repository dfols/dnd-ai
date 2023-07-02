"use client";

import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      // redirect to character creation or another page
    } else {
      // handle error
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="relative p-10 space-y-4 bg-white rounded shadow-lg w-3/4"
      >
        <h2 className="orange_gradient text-center text-4xl font-bold mb-8">
          Login
        </h2>
        <div className="flex flex-col space-y-4">
          {/* Input Fields */}
          <div className="flex space-x-4">
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
          <div className="flex space-x-4">
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
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
