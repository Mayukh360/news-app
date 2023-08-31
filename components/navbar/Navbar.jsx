import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
    const router=useRouter()
    const navigatePolitics=()=>{
        router.push("/body");
    }
    const navigateSports=()=>{
        router.push("/sports")
    }
    const navigateTechnology=()=>{
        router.push("/technology")
    }
    const navigateHealth=()=>{
        router.push("/health")
    }
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-semibold">News App</div>
      <div className="flex space-x-4">
        <button onClick={navigateTechnology} className="text-white hover:text-gray-300 focus:outline-none">
          Technology
        </button>
        <button onClick={navigateSports} className="text-white hover:text-gray-300 focus:outline-none">
          Sports
        </button>
        <button onClick={navigatePolitics} className="text-white hover:text-gray-300 focus:outline-none">
          Politics
        </button>
        <button onClick={navigateHealth} className="text-white hover:text-gray-300 focus:outline-none">
          Health
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
