import { useState } from "react";
import { registerUser } from "../modules/fetch";
import './Navbar.css'

const Register = ({closeSignUpModal, openLoginModal}) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("")

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        if (!e.target.first_name.value || !e.target.email.value || !password || !e.target.user_address.value || !e.target.user_role.value) {
          alert("Semua Field Harus diisi!");
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.email.value)) {
          setError("Invalid email address");
          return;
        }

        try {
          await registerUser(
            e.target.first_name.value,
            e.target.last_name.value,
            e.target.username.value,
            e.target.email.value,
            password,
            e.target.user_address.value,
            e.target.user_role.value
          );

          // Set pesan sukses
          setSuccessMessage("Registration successful!");

          // Reset state password dan konfirmasi password
          setPassword("");
          setConfirmPassword("");

          // Navigasi setelah beberapa detik
          setTimeout(() => {
          closeSignUpModal();
        } , 10000); // Navigasi setelah 10 detik (sesuaikan sesuai kebutuhan)
        
        } catch (err) {
           // Menyimpan pesan kesalahan ke state
           setError(`Error: ${err.message}`);
        }
      };

    return (

    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="containerModalSignUp bg-primary p-8 rounded-xl z-10">
      <button className="hover:text-white text-2xl font-bold btnCloseRegister text-tertiary" onClick={() => closeSignUpModal()}>X</button>
        <img
          src="./deliverit.svg"
          className="w-56 h-56 ml-20"
          alt="Deliverit Logo"
        />
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-gray-700 font-medium"
            ></label>
            <input
              type="text"
              name="first_name"
              // value={""}
              // onChange={""}
              className="w-full py-2  border rounded-md bg-white text-black"
              placeholder="First Name"
            />
          </div><div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-gray-700 font-medium"
            ></label>
            <input
              type="text"
              name="last_name"
              // value={""}
              // onChange={""}
              className="w-full  py-2 border rounded-md bg-white text-black"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            ></label>
            <input
              type="text"
              name="username"
              // value={""}
              // onChange={""}
              className="w-full  py-2 border rounded-md bg-white text-black"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium"
            ></label>
            <input
              type="email"
              name="email"
              // value={""}
              // onChange={""}
              className="w-full  py-2 border rounded-md bg-white text-black"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_address"
              className="block text-gray-700 font-medium"
            ></label>
            <input
              type="text"
              name="user_address"
              // value={""}
              // onChange={""}
              className="w-full  py-2 border rounded-md bg-white text-black"
              placeholder="User Address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_role"
              className="block text-gray-700 font-medium"
            ></label>
            <input
              type="text"
              name="user_role"
              // value={""}
              // onChange={""}
              className="w-full  py-2 border rounded-md bg-white text-black"
              placeholder="User Role"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password"></label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  py-2 border rounded-md pr-10 bg-white text-black"
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
                    className="w-6 h-6 absolute right-2 bottom-2"
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
                    className="w-6 h-6 absolute right-2 bottom-2"
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
          <div className="mb-4">
            <label htmlFor="password"></label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full  py-2 border rounded-md pr-10 bg-white text-black"
                placeholder="Confirm Password"
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
                    className="w-6 h-6 absolute right-2 bottom-2"
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
                    className="w-6 h-6 absolute right-2 bottom-2"
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

            {successMessage === 'Registration successful!' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="containerModalSuccess bg-white p-8 rounded-lg z-10">
        {/* <img
        src="https://example.com/path/to/checkmark.svg"
        alt="Checkmark"
        className="success-icon w-12 h-12 mx-auto mb-4"
      /> */}
      <p className="text-tertiary text-5xl font-bold mt-4">Akun Berhasil Dibuat!</p>
      <button
        onClick={() => {
        setSuccessMessage('');
        closeSignUpModal();
        openLoginModal();
      }}
        className="bg-tertiary text-white px-40 py-2 rounded hover:bg-blue-700 mt-10"
      >
        Sign In
      </button>
    </div>
  </div>
      )}

          {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-tertiary text-white rounded-md py-2 mb-2"
          >
            Sign Up
          </button>

          {password !== confirmPassword && (
            <span fontSize="xs" color="red.500">
              The password does not match
            </span>
            )}
        </form>
      </div>
    </div>
  )
}

export default Register