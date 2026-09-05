function Dashboard({ onNavigate }) {
  return (
    <div>

      {/* ================= WELCOME SECTION ================= */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <p className="text-sm text-blue-600 font-semibold">
              Beneficiary Portal
            </p>

            <h1 className="text-3xl font-bold text-gray-800 mt-1">
              Welcome back, Harit 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Track your government scheme applications and benefits.
            </p>
          </div>

          <div className="bg-blue-50 px-5 py-4 rounded-xl">
            <p className="text-sm text-blue-600 font-semibold">
              Beneficiary ID
            </p>

            <p className="text-lg font-bold text-blue-800 mt-1">
              JS-BEN-1024
            </p>
          </div>

        </div>

      </div>

      {/* ================= STATISTICS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Total Applications
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            24
          </h2>

          <p className="text-sm text-blue-600 mt-2">
            All applications
          </p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Approved
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            18
          </h2>

          <p className="text-sm text-green-600 mt-2">
            75% approval rate
          </p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            5
          </h2>

          <p className="text-sm text-yellow-600 mt-2">
            Under verification
          </p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <p className="text-gray-500 text-sm">
            Rejected
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            1
          </h2>

          <p className="text-sm text-red-600 mt-2">
            Needs attention
          </p>
        </div>

      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold text-gray-800">
              Recent Applications
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest updates on your applications.
            </p>

          </div>

          <div className="divide-y">

            {/* Application 1 */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <p className="font-semibold text-gray-800">
                  Housing Assistance
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Application #JS1024
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Submitted: 02 Sep 2026
                </p>
              </div>

              <span className="w-fit px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                Approved
              </span>

            </div>

            {/* Application 2 */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <p className="font-semibold text-gray-800">
                  Education Support
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Application #JS1025
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Submitted: 28 Aug 2026
                </p>
              </div>

              <span className="w-fit px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold">
                Pending
              </span>

            </div>

            {/* Application 3 */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>
                <p className="font-semibold text-gray-800">
                  Health Assistance
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Application #JS1026
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Submitted: 20 Aug 2026
                </p>
              </div>

              <span className="w-fit px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                Approved
              </span>

            </div>

          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}
        <div className="bg-white rounded-xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold text-gray-800">
              Quick Actions
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Frequently used services.
            </p>

          </div>

          <div className="p-6 space-y-3">

            {/* Apply Scheme */}
            <button
              onClick={() => onNavigate("schemes")}
              className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100"
            >
              Apply for a Scheme
            </button>

            {/* Upload Documents */}
            <button
              onClick={() => onNavigate("documents")}
              className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100"
            >
              Upload Documents
            </button>

            {/* Applications */}
            <button
              onClick={() => onNavigate("applications")}
              className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100"
            >
              View All Applications
            </button>

            {/* Profile */}
            <button
              onClick={() => onNavigate("profile")}
              className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100"
            >
              Update Profile
            </button>

          </div>

        </div>

      </div>

      {/* ================= IMPORTANT NOTICE ================= */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-6">

        <h2 className="font-bold text-blue-800">
          📢 Important Notice
        </h2>

        <p className="text-sm text-blue-700 mt-2">
          Please make sure your Aadhaar, bank details and income
          certificate are up to date before applying for new schemes.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;