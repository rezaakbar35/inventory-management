import React, { useState } from "react";

const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <nav className="bg-primary fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./deliverit.svg" className="h-10" alt="Flowbite Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            DeliverIT
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 gap-x-3 rtl:space-x-reverse">
          <button
            onClick={openLoginModal}
            type="button"
            className="text-white border-solid border-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <button
            onClick={openSignUpModal}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-xl ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-primary p-6 rounded-lg z-10">
            <button
              onClick={closeLoginModal}
              className="sticky top-0 text-black hover:text-gray-800"
            >
              Close
            </button>
            <img
              src="./deliverit.svg"
              className="w-56 h-56 ml-32"
              alt="Deliverit Logo"
            />
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium"
                ></label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md pr-10 bg-white text-black"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-2 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {/* Icon untuk menunjukkan atau menyembunyikan password */}
                    {showPassword ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 10l4-4m0 0l4 4m-4-4v14m8-14v14m2-5l4-4m0 0l4 4m-4-4v14"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 10l4-4m0 0l4 4m-4-4v14m8-14v14m2-5l4-4m0 0l4 4m-4-4v14"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <span>Forgot your password? click here</span>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2"
              >
                Sign-In
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 mt-8"
              >
                Sign-Up
              </button>
              <span>Don't Have Account?</span>
            </form>
          </div>
        </div>
      )}

      {/* Modal Sign Up */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-primary p-8 rounded-lg z-10">
            <button
              onClick={closeSignUpModal}
              className="sticky-top-0 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <img
              src="./deliverit.svg"
              className="w-56 h-56"
              alt="Deliverit Logo"
            />
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                ></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  // value={""}
                  // onChange={""}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium"
                ></label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  // value={""}
                  // onChange={""}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password"></label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    // value={""}
                    // onChange={""}
                    className="w-full px-3 py-2 border rounded-md pr-10 bg-white text-black"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-2 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {/* Icon untuk menunjukkan atau menyembunyikan password */}
                    {showPassword ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 10l4-4m0 0l4 4m-4-4v14m8-14v14m2-5l4-4m0 0l4 4m-4-4v14"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 10l4-4m0 0l4 4m-4-4v14m8-14v14m2-5l4-4m0 0l4 4m-4-4v14"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
