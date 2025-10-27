import React from "react";

function Login() {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <p className="text-lg mb-4">Login to access the full dashboard</p>
      <form
        className="border-t-4 border-[var(--main-color)] p-6 w-80 flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-1">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded p-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 mb-1">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded p-1"
          />
        </div>

        <button
          type="submit"
          className="bg-[var(--main-color)] text-white rounded p-2 mt-3 hover:opacity-90 transition"
        >
          OK
        </button>
      </form>
    </section>
  );
}

export default Login;
