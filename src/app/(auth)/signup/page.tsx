"use client";

import React, { useState } from "react";
import PasswordInput from "@/component/passwordUi/PasswordInput";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { signUpSchema, SignUpFormData } from "@/lib/validation";
import { ZodError } from "zod";

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    try {
      const validated = signUpSchema.parse(formData);
      const {confirmPassword, ...dataToSend} = validated;
      console.log(" Valid data:", dataToSend);
      setSuccessMessage("Account created successfully!");
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors: Partial<Record<keyof SignUpFormData, string>> = {};
        err.errors.forEach((error) => {
          const field = error.path[0] as keyof SignUpFormData;
          fieldErrors[field] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-3/6 h-auto flex flex-col items-center justify-center px-8 py-6 rounded-2xl shadow-sm shadow-gray-700">
        <h2 className="text-3xl text-center text-gray-700">Welcome</h2>
        <p className="text-[16px] text-center text-gray-400 my-6">
          Enter the credentials to set up your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col">
          <div className="flex w-full justify-center gap-9">
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="fName" className="text-gray-700 text-[16px]">
                First Name
              </label>
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                placeholder="John"
                className="block bg-[#f7f7f7] border border-[#e4e4e7] rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
              />
              {errors.fName && <p className="text-red-500 text-sm">{errors.fName}</p>}
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="lName" className="text-[16px] text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                value={formData.lName}
                onChange={handleChange}
                placeholder="Doe"
                className="block bg-[#f7f7f7] border border-[#e4e4e7] rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
              />
              {errors.lName && <p className="text-red-500 text-sm">{errors.lName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[16px] text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="block bg-[#f7f7f7] border border-[#e4e4e7] rounded-sm w-full mt-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <PasswordInput
            label="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          <button
            type="submit"
            className="bg-[#0070EF] py-2 rounded-md text-white text-[16px] flex gap-2 hover:bg-blue-700 transition-colors cursor-pointer justify-center items-center"
          >
            Sign Up <FaLongArrowAltRight />
          </button>

          {successMessage && <p className="text-green-600 text-sm mt-2">{successMessage}</p>}
        </form>

        <div className="flex items-center w-full my-4">
          <span className="flex-grow border-t border-gray-400"></span>
          <span className="mx-4 text-gray-500 text-sm uppercase">or Continue with</span>
          <span className="flex-grow border-t border-gray-400"></span>
        </div>

        <div className="mt-4 w-full">
          <button
            type="button"
            className="w-full cursor-pointer flex items-center justify-center gap-3 border border-blue-300 rounded-md py-2 hover:bg-gray-100 transition-colors"
          >
            <Image src="/assets/google.png" alt="google logo" width={24} height={24} className="object-cover" />
            <span className="text-sm text-gray-700">Google Account</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center p-4">
          <h2 className="text-xl text-gray-500">Already have an account?</h2>
          <Link href="/signin" className="text-blue-600 font-bold hover:text-blue-700">
            Sign In
          </Link>
          <p className="text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
