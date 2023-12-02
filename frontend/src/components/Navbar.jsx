import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import { loginUser } from "../modules/fetch";
import './Navbar.css'

const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (

    // Navbar
    <nav className="bg-primary fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./deliverit.svg" className="w-14 h-14" alt="Flowbite Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            {/* DeliverIT */}
          </span>
        </a>

        {/* Tombol Login & Sign Up */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 gap-x-8 rtl:space-x-reverse">
        {!isLogin ? (
          <button
            onClick={openLoginModal}
            type="button"
            className="text-background rounded md:hover:text-white md:p-0 md:dark:hover:text-white font-medium text-xl px-4 py-2 text-center"
          >
            Login
          </button>
          ) : (
            <button
              onClick={() => {
                window.localStorage.removeItem("token");
                setIsLogin(false);
                navigate("/");
              }}
              className="text-background rounded md:hover:text-white md:p-0 md:dark:hover:text-white font-medium text-xl px-4 py-2 text-center"
            >
              Logout
            </button>
          )}

        {!isLogin && (
          <button
            onClick={openSignUpModal}
            type="button"
            className="text-background border-solid border-2 hover:bg-white-800 focus:outline-none ring-gray-300 font-medium rounded-full text-xl px-4 py-2 text-center hover:bg-white hover:text-black"
          >
            Sign Up
          </button>
        )}

          {/* Menu Bar Sticky */}
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
        
        {/* Menu Bar */}
        {isLogin && (
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-xl ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-500 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-background rounded md:hover:text-white md:p-0 md:dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-background rounded md:hover:text-white md:p-0 md:dark:hover:text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-background rounded md:hover:text-white md:p-0 md:dark:hover:text-white"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-background rounded md:hover:text-white md:p-0 md:dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
        )}
      </div>
      

      {/* Modal Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="containerModalLogin bg-primary p-6 rounded-xl z-10">
            <button
              onClick={ () => {
              closeLoginModal();
              setError(''); // Reset pesan kesalahan saat menutup modal
            }} 
              className="btnCloseLogin text-tertiary text-2xl hover:text-white font-bold"
            >
              X
            </button>
            <img
              src="./deliverit.svg"
              className="w-56 h-56 ml-24"
              alt="Deliverit Logo"
            />
            <form id="login-form"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const token = await loginUser(
                e.target.username.value,
                e.target.password.value
              );
              window.localStorage.setItem("token", token.token);
              navigate("/");
              closeLoginModal();
            } catch (err) {
              // Menyimpan pesan kesalahan ke state
            setError(`Error: ${err.message}`);
            }
          }}
          >
              <div className="mt-2 mb-4">
                <input
                  type="text"
                  name="username"
                  className="w-full py-2 border rounded-md bg-white text-black"
                  placeholder="Username"
                />
              </div>
              <div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full py-2 border rounded-md pr-10 bg-white text-black"
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
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-4 ml-40">
              <span>Forgot your password? click here</span>
              </div>
              <button
                type="submit"
                form="login-form"
                onClick={() => console.log("Sign-In clicked")} // Gantilah dengan fungsi atau tindakan yang sesuai
                className="w-full bg-tertiary text-white rounded-md py-2"
                >
                Sign-In
              </button>
              <button
                type="submit"
                className="w-full bg-tertiary text-white rounded-md py-2 mt-10"
                onClick={() => {
                  console.log("Sign-Up clicked");
                  closeLoginModal(); // Menutup modal login
                  openSignUpModal(); // Membuka modal sign-up
                }}
              >
                Sign-Up
              </button>
              <span>Don't Have Account?</span>
              {error && <div className="flex items-center justify-center text-center p-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
              <svg className="flex-shrink-0 inline w-5 h-5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span className="sr-only">Info</span>
              <div>
              <span className="font-semibold">Username atau password salah</span>
              </div>
              </div>}
            </form>
          </div>
        </div>
      )}

      {/* Modal Sign Up */}
      {isSignUpModalOpen && (
        <>
      <Register closeSignUpModal={closeSignUpModal} openLoginModal={openLoginModal} />
        </>
        )}
    </nav>
  );
};

export default Navbar;
