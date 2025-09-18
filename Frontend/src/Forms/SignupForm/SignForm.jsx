import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen w-full bg-dark-browne flex justify-center items-center px-4">
      <div className="max-w-md w-full bg-[#3a3f5f] rounded-lg shadow-lg p-6">
        <h1 className="text-center text-2xl italic underline text-white mb-6 font-bold">
          Sign Up Form
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-white font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="px-4 py-2 outline-none bg-white rounded-md focus:ring-2 focus:ring-[#6B8E23] transition"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="px-4 py-2 outline-none bg-white rounded-md focus:ring-2 focus:ring-[#6B8E23] transition"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="px-4 py-2 outline-none bg-white rounded-md focus:ring-2 focus:ring-[#6B8E23] transition"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-white font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="px-4 py-2 outline-none bg-white rounded-md focus:ring-2 focus:ring-[#6B8E23] transition"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#6B8E23] text-white py-3 rounded-md hover:bg-[#556B2F] transition font-semibold mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-[#6B8E23] hover:underline font-semibold"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;