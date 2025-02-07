import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Signup Successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page after signup
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
