import React, { useState } from 'react';
import Select from 'react-select';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    referenceName: '',
    number: '',
    dob: '',
    address: '',
    userType: '',
    userDesignation: ''
  });

  const userTypeOptions = [
    { value: 'Karyakrta', label: 'Karyakrta' },
    { value: 'Yuvak', label: 'Yuvak' }
  ];

  const userDesignationOptions = [
    { value: 'Student', label: 'Student' },
    { value: 'Working Professional', label: 'Working Professional' }
  ];

  const handleChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">User Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Enter your full name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Name:
              <input
                type="text"
                name="referenceName"
                value={formData.referenceName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Enter your reference name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number:
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Enter your number"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Enter your date of birth"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Enter your address"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Type:
              <Select
                name="userType"
                value={userTypeOptions.find(option => option.value === formData.userType)}
                onChange={(selectedOption) => handleChange('userType', selectedOption)}
                options={userTypeOptions}
                placeholder="Select user type"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Designation:
              <Select
                name="userDesignation"
                value={userDesignationOptions.find(option => option.value === formData.userDesignation)}
                onChange={(selectedOption) => handleChange('userDesignation', selectedOption)}
                options={userDesignationOptions}
                placeholder="Select user designation"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
