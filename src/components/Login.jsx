import { useState } from "react";
import logo from "./JanSahayLogo.svg";

function Login({ onLogin }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jansahay-backend.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "demo@jansahay.com",
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }
      localStorage.setItem("token", data.token);

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Login successful
      onLogin();
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="JanSahay"
            className="h-16"
          />
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome to JanSahay
            </h1>

            <p className="text-gray-500 mt-2">
              Login to access your beneficiary account
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Mobile */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>

              <input
                type="tel"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                placeholder="Enter mobile number"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-700">
                  {error}
                </p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* Demo Information */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <span className="font-semibold">
                Demo Login:
              </span>
              <br />
              Email: demo@jansahay.com
              <br />
              Password: Admin@123
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          JanSahay — Government Assistance Portal
        </p>

      </div>
    </div>
  );
}

export default Login;