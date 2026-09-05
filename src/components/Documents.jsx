import { useState } from "react";

function Documents() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Aadhaar Card",
      type: "Identity Proof",
      status: "Verified",
      file: "aadhaar.pdf",
    },
    {
      id: 2,
      name: "Income Certificate",
      type: "Income Proof",
      status: "Pending",
      file: "income-certificate.pdf",
    },
    {
      id: 3,
      name: "Residence Certificate",
      type: "Address Proof",
      status: "Verified",
      file: "residence-certificate.pdf",
    },
    {
      id: 4,
      name: "Bank Passbook",
      type: "Bank Details",
      status: "Not Uploaded",
      file: null,
    },
  ]);

  const handleUpload = (id, file) => {
    if (!file) return;

    setDocuments((currentDocuments) =>
      currentDocuments.map((document) =>
        document.id === id
          ? {
              ...document,
              status: "Uploaded",
              file: file.name,
            }
          : document
      )
    );
  };

  const handleRemove = (id) => {
    setDocuments((currentDocuments) =>
      currentDocuments.map((document) =>
        document.id === id
          ? {
              ...document,
              status: "Not Uploaded",
              file: null,
            }
          : document
      )
    );
  };

  return (
    <div>

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        My Documents
      </h1>

      <p className="mt-2 text-gray-600">
        Upload and manage documents required for government schemes.
      </p>

      {/* Documents Card */}
      <div className="bg-white rounded-xl shadow-sm border mt-8 overflow-hidden">

        {/* Header */}
        <div className="px-6 py-5 border-b">
          <h2 className="text-xl font-bold text-gray-800">
            Required Documents
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Keep your documents updated for faster application processing.
          </p>
        </div>

        {/* Documents */}
        <div className="divide-y">

          {documents.map((document) => (
            <div
              key={document.id}
              className="p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
            >

              {/* Document Information */}
              <div className="flex-1">

                <h3 className="font-semibold text-gray-800 text-lg">
                  {document.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {document.type}
                </p>

                {document.file && (
                  <p className="text-sm text-blue-600 mt-2">
                    📄 {document.file}
                  </p>
                )}

              </div>

              {/* Status */}
              <div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    document.status === "Verified"
                      ? "bg-green-50 text-green-700"
                      : document.status === "Pending"
                      ? "bg-yellow-50 text-yellow-700"
                      : document.status === "Uploaded"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {document.status}
                </span>

              </div>

              {/* Actions */}
              <div className="flex gap-3">

                {/* Upload */}
                <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">

                  {document.status === "Not Uploaded"
                    ? "Upload"
                    : "Replace"}

                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(event) =>
                      handleUpload(
                        document.id,
                        event.target.files[0]
                      )
                    }
                  />

                </label>

                {/* Remove */}
                {document.file && (
                  <button
                    onClick={() => handleRemove(document.id)}
                    className="px-4 py-2 border border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50"
                  >
                    Remove
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Information Box */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">

        <h3 className="font-semibold text-blue-800">
          📌 Document Guidelines
        </h3>

        <ul className="mt-2 text-sm text-blue-700 space-y-1">
          <li>• Accepted formats: PDF, JPG, JPEG, PNG</li>
          <li>• Make sure documents are clear and readable.</li>
          <li>• Avoid uploading incorrect or expired documents.</li>
        </ul>

      </div>

    </div>
  );
}

export default Documents;