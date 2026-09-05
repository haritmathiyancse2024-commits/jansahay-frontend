import { useState } from "react";
import logo from "./JanSahayLogo.svg";

import Dashboard from "./Dashboard";
import Applications from "./Applications";
import Schemes from "./Schemes";
import Documents from "./Documents";
import Profile from "./Profile";

function BeneficiaryScreen({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden md:flex w-64 bg-white border-r flex-col">

        {/* Logo */}
        <div className="p-6 border-b">
          <img
            src={logo}
            alt="JanSahay"
            className="h-12"
          />
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">

          {/* Dashboard */}
          <button
            onClick={() => setActivePage("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
              activePage === "dashboard"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Dashboard
          </button>

          {/* Applications */}
          <button
            onClick={() => setActivePage("applications")}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
              activePage === "applications"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            My Applications
          </button>

          {/* Schemes */}
          <button
            onClick={() => setActivePage("schemes")}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
              activePage === "schemes"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Schemes
          </button>

          {/* Documents */}
          <button
            onClick={() => setActivePage("documents")}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
              activePage === "documents"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Documents
          </button>

          {/* Profile */}
          <button
            onClick={() => setActivePage("profile")}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
              activePage === "profile"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Profile
          </button>

        </nav>

        {/* ================= LOGOUT ================= */}
        <div className="mt-auto p-4 border-t">

          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 font-semibold"
          >
            Logout
          </button>

        </div>

      </aside>

      {/* ================= MAIN AREA ================= */}
      <div className="flex-1">

        {/* Header */}
        <header className="bg-white border-b px-8 py-4 flex justify-between items-center">

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              JanSahay
            </h2>

            <p className="text-sm text-gray-500">
              Government Assistance Portal
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-gray-800">
              Beneficiary
            </p>

            <p className="text-sm text-gray-500">
              Welcome back
            </p>
          </div>

        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="p-8">

          {/* Dashboard */}
          {activePage === "dashboard" && (
            <Dashboard onNavigate={setActivePage} />
          )}

          {/* Applications */}
          {activePage === "applications" && (
            <Applications />
          )}

          {/* Schemes */}
          {activePage === "schemes" && (
            <Schemes />
          )}

          {/* Documents */}
          {activePage === "documents" && (
            <Documents />
          )}

          {/* Profile */}
          {activePage === "profile" && (
            <Profile />
          )}

        </main>

      </div>

    </div>
  );
}

export default BeneficiaryScreen;