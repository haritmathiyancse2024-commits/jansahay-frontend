import { useEffect, useState } from "react";

function Schemes() {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [applied, setApplied] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
                const response = await fetch("https://jansahay-backend.onrender.com/api/schemes", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch schemes");
        }

        setSchemes(data.data || data.schemes || []);
      } catch (err) {
        console.error("Error fetching schemes:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  const handleApply = () => {
    setApplied(true);
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Government Schemes
        </h1>

        <p className="mt-4 text-gray-600">
          Loading schemes...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Government Schemes
        </h1>

        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="font-semibold text-red-800">
            Failed to load schemes
          </p>

          <p className="text-sm text-red-700 mt-1">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* PAGE HEADING */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Government Schemes
        </h1>

        <p className="mt-2 text-gray-600">
          Explore government schemes and check your eligibility.
        </p>
      </div>

      {/* SUCCESS MESSAGE */}
      {applied && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-green-800">
            Application Submitted Successfully! ✅
          </h3>

          <p className="text-sm text-green-700 mt-1">
            Your application has been submitted for{" "}
            <span className="font-semibold">
              {selectedScheme?.name}
            </span>
            .
          </p>
        </div>
      )}

      {/* DETAILS */}
      {selectedScheme && (
        <div className="mt-8 bg-white rounded-xl border shadow-sm p-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-sm text-blue-600 font-semibold">
                Scheme Details
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {selectedScheme.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {selectedScheme.description}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedScheme(null);
                setApplied(false);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Benefit
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {selectedScheme.benefit || "Not specified"}
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Eligibility Status
              </p>

              <p className="font-semibold text-green-700 mt-1">
                Check Eligibility
              </p>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Apply Now
          </button>
        </div>
      )}

      {/* SCHEME CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {scheme.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  {scheme.description || "Government welfare scheme"}
                </p>
              </div>

              <span className="whitespace-nowrap px-3 py-1 rounded-full text-sm font-semibold bg-yellow-50 text-yellow-700">
                Check Eligibility
              </span>
            </div>

            <div className="mt-5 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">
                Benefit
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {scheme.benefit || "Not specified"}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedScheme(scheme);
                setApplied(false);
              }}
              className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schemes;