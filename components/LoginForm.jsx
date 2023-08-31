import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function LoginForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    let obj = {
      name,
      email,
      password,
    };
    try {
      if (!login) {
        // signup request
        const response = await axios.post("/api/signup", obj);
        console.log(response.data);
        const { token, userId } = response.data;
        localStorage.setItem("userId", userId);
        localStorage.setItem("userId", token);
        router.push("/body")
      
      } else {
        // login request
        const response = await axios.post("/api/login", obj);
        console.log(response.data);
        const { token, userId } = response.data;
        localStorage.setItem("userId", userId);
        localStorage.setItem("userId", token);
        router.push("/body")
       
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const loginStateHandler = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen">
      <form
        className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {login ? "Login" : "Signup"}
        </button>
      </form>
      <button
        className="text-blue-500 hover:text-blue-800"
        onClick={loginStateHandler}
      >
        {login ? "Create New Account" : "Login to Existing Account"}
      </button>
    </div>
  );
}
