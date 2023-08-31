import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
    const router=useRouter()
    const navigatePage = (path) => {
        router.push(path);
    };
    const logoutHandler=()=>{
        router.push("/")
    }
  return (
<nav className="bg-gray-800 p-4 flex flex-wrap justify-between items-center">
            <div className="text-white text-xl font-semibold mb-4 md:mb-0">
                News App
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <button
                    onClick={() => navigatePage("/science")}
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                    Science
                </button>
                <button
                    onClick={() => navigatePage("/technology")}
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                    Technology
                </button>
                <button
                    onClick={() => navigatePage("/sports")}
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                    Sports
                </button>
                <button
                    onClick={() => navigatePage("/body")}
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                    Politics
                </button>
                <button
                    onClick={() => navigatePage("/health")}
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                    Health
                </button>
                <button
                    onClick={logoutHandler}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>

  );
}
