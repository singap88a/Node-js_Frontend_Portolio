"use client";
import { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/hero.json";

interface LoginComponentProps {
  onLoginSuccess: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ isAuthenticated: boolean }>(
        "https://backend-alpha-smoky-74.vercel.app/api/admin/login",
        {
          email,
          password,
        }
      );
      if (res.data.isAuthenticated) {
        onLoginSuccess();
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container">
      <div className="text-center pb-5 ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold ">
          Login
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#1a172f5e] backdrop-blur-md p-8 shadow-lg rounded-md relative z-[500] border-[#8d60d4c5] border md:py-11">
        <form onSubmit={handleLogin} className="space-y-4 md:w-1/2">
          <div className="pb-2">
            <label htmlFor="email" className="text-xl text-gray-400 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg bg-gray-800 text-white border-[#8d60d4c5] focus:ring-blue-500 my-2"
            />
          </div>

          <div className="pb-3">
            <label htmlFor="password" className="text-xl text-gray-400 mb-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg bg-gray-800 text-white border-[#8d60d4c5] focus:ring-blue-500 my-2"
            />
          </div>

          <button
            type="submit"
            className="w-full button-primary text-white font-bold py-3 px-6 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="w-full md:w-1/2 text-center">
          <Lottie
            className="contactAnimation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;