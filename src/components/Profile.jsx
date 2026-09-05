import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Harit Mathiyan",
    beneficiaryId: "JS-BEN-1024",
    mobile: "9876543210",
    email: "harit@example.com",
    address: "Meerut, Uttar Pradesh",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your beneficiary profile and personal information.
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={handleEdit}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}

      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border mt-8 p-6">

        {/* Profile Header */}
        <div className="flex items-center gap-4 pb-6 border-b">

          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
            H
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {profile.name}
            </h2>

            <p className="text-sm text-gray-500">
              Beneficiary ID: {profile.beneficiaryId}
            </p>
          </div>

        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-4 py-3 border rounded-lg outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Beneficiary ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Beneficiary ID
            </label>

            <input
              type="text"
              value={profile.beneficiaryId}
              disabled
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-4 py-3 border rounded-lg outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-4 py-3 border rounded-lg outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              rows="3"
              className="w-full px-4 py-3 border rounded-lg outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Buttons */}
        {isEditing && (
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t">

            <button
              onClick={handleCancel}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              Save Changes
            </button>

          </div>
        )}

      </div>

      {/* Account Status */}
      <div className="bg-white rounded-xl shadow-sm border mt-6 p-6">

        <h2 className="text-lg font-bold text-gray-800">
          Account Status
        </h2>

        <div className="mt-4 flex items-center gap-3">

          <span className="w-3 h-3 bg-green-500 rounded-full"></span>

          <span className="font-semibold text-green-700">
            Active
          </span>

          <span className="text-sm text-gray-500">
            Your beneficiary account is active.
          </span>

        </div>

      </div>

    </div>
  );
}

export default Profile;