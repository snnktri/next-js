"use client";

import React, { useState } from "react";
import PasswordInput from "@/component/passwordUi/PasswordInput";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FormLoginData, formSchema } from "@/lib/validation";
import { ZodError } from "zod";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<Partial<FormLoginData>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    try {
      const validatedData = formSchema.parse({ email, password });
      console.log("Valid Data:", validatedData);

      setSuccessMessage("Successfully signed in!");
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Partial<FormLoginData> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormLoginData;
          fieldErrors[field] = err.message;
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
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-[16px] text-gray-700">
              Email
            </label>
            
           <div className="relative">
            <CiMail  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 pointer-events-none"/>
             <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block bg-[#f7f7f7] border-1 border-[#e4e4e7] rounded-sm w-full mt-2
              px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
              placeholder="john@gmail.com"
            />
           </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <PasswordInput
            label="Enter Password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <button
            type="submit"
            className="bg-[#0070EF] py-2 rounded-md text-white text-[16px] 
            flex gap-2 hover:bg-blue-700 transition-colors cursor-pointer justify-center items-center"
          >
            Sign In <FaLongArrowAltRight />
          </button>

          {successMessage && (
            <p className="text-green-600 text-sm font-medium">{successMessage}</p>
          )}
        </form>

        {/* Social login */}
        <div className="flex items-center w-full my-4">
          <span className="flex-grow border-t border-gray-400"></span>
          <span className="mx-4 text-gray-500 text-sm uppercase">or Continue with</span>
          <span className="flex-grow border-t border-gray-400"></span>
        </div>

        <div className="mt-4 w-full">
          <button
            type="button"
            className="w-full cursor-pointer flex items-center justify-center gap-3 border-1 border-blue-300 rounded-md py-2 hover:bg-gray-100 transition-colors"
          >
            <Image
              src="/assets/google.png"
              alt="google logo"
              width={24}
              height={24}
              className="object-cover"
            />
            <span className="text-sm text-gray-700">Google Account</span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4 justify-center items-center p-4">
          <h2 className="text-xl text-gray-500">Don't have an account?</h2>
          <Link href="/signup" className="text-blue-600 font-bold hover:text-blue-700">
            Sign In
          </Link>
          <p className="text-gray-500">By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
