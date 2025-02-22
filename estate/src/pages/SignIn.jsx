import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignInStart, SignInSuccess, SignInFailure } from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(SignInStart()); // Ensure correct case
    try {
      const res = await fetch("/api/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        dispatch(SignInFailure(data.message || "Something went wrong"));
        return;
      }

      dispatch(SignInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(SignInFailure(error.message));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome Back</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg p-3 bg-gray-100"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg p-3 bg-gray-100"
            id="password"
            onChange={handleChange}
            value={formData.password}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg uppercase tracking-wide hover:opacity-90 transition-all duration-200 disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-5">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/SignUp" className="text-indigo-600 font-semibold hover:underline">
            Create an Account
          </Link>
        </div>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}
