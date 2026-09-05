function Applications() {
  const applications = [
    {
      id: "JS1024",
      scheme: "Housing Assistance",
      date: "02 Sep 2026",
      status: "Approved",
    },
    {
      id: "JS1025",
      scheme: "Education Support",
      date: "28 Aug 2026",
      status: "Pending",
    },
    {
      id: "JS1026",
      scheme: "Health Assistance",
      date: "20 Aug 2026",
      status: "Approved",
    },
    {
      id: "JS1027",
      scheme: "Food Security Scheme",
      date: "15 Aug 2026",
      status: "Rejected",
    },
  ];

  return (
    <div>

      {/* HEADING */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Applications
        </h1>

        <p className="mt-2 text-gray-600">
          View and track all your government scheme applications.
        </p>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">

        <div className="bg-white rounded-xl border shadow-sm p-5">
          <p className="text-sm text-gray-500">
            Total Applications
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {applications.length}
          </h2>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-5">
          <p className="text-sm text-gray-500">
            Approved
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {
              applications.filter(
                (application) => application.status === "Approved"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-5">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {
              applications.filter(
                (application) => application.status === "Pending"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* APPLICATION TABLE */}
      <div className="bg-white rounded-xl shadow-sm border mt-8 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border-b">

              <tr>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Application ID
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Scheme
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Date
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {applications.map((application) => (

                <tr
                  key={application.id}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >

                  <td className="px-6 py-5 font-semibold text-gray-800">
                    {application.id}
                  </td>

                  <td className="px-6 py-5 text-gray-700">
                    {application.scheme}
                  </td>

                  <td className="px-6 py-5 text-gray-500">
                    {application.date}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        application.status === "Approved"
                          ? "bg-green-50 text-green-700"
                          : application.status === "Pending"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {application.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Applications;