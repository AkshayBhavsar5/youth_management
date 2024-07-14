import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Select from "react-select"; // Import react-select

const karyakarta = [
  { value: "Jigar Patel", label: "Jigar Patel" },
  { value: "Chetn Pipaliya", label: "Chetn Pipaliya" },
  { value: "Vivek Makvana", label: "Vivek Makvana" },
];

const cities = ["Home", "Outside"];

const youthType = ["Student", "Businessman", "Employee"];

const yuvaName = [
  { value: "Sahjanand darji", label: "Sahjanand darji" },
  { value: "Akshay bhavsar", label: "Akshay bhavsar" },
  { value: "Rkesh makwana", label: "Rkesh makwana" },
];

const DataFeed = () => {
  const [formData, setFormData] = useState({
    date: "",
    karyakartaName: "",
    yuvaName: "",
    place: "",
    hours: 0,
    minutes: 0,
    category: "",
    comments: "",
  });

  const handleChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { hours, minutes } = formData;
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    if (totalMinutes > 120) {
      alert("The total duration cannot exceed 2 hours.");
      return;
    }

    // Perform form validation and submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Data Feeder Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Seva Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Karyakrta Name:
              <Select
                options={karyakarta}
                value={karyakarta.filter(
                  (option) => option.value === formData.karyakartaName
                )}
                onChange={(selectedOption) =>
                  handleChange("karyakartaName", selectedOption)
                }
                placeholder="Select a name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Yuva Name:
              <Select
                options={yuvaName}
                value={yuvaName.filter(
                  (option) => option.value === formData.yuvaName
                )}
                onChange={(selectedOption) =>
                  handleChange("yuvaName", selectedOption)
                }
                placeholder="Select a name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Place:
              <select
                name="place"
                value={formData.place}
                onChange={(e) =>
                  setFormData({ ...formData, place: e.target.value })
                }
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select a place
                </option>
                {cities.map((city, index) => (
                  <option value={city} key={index}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Time:
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={(e) =>
                    setFormData({ ...formData, hours: e.target.value })
                  }
                  min="0"
                  max="2"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Hours"
                />
                <input
                  type="number"
                  name="minutes"
                  value={formData.minutes}
                  onChange={(e) =>
                    setFormData({ ...formData, minutes: e.target.value })
                  }
                  min="0"
                  max="60"
                  step="15"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Minutes"
                />
              </div>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Youth Type:
              <select
                name="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {youthType.map((YT, index) => (
                  <option value={YT} key={index}>
                    {YT}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Comments:
              <textarea
                name="comments"
                value={formData.comments}
                onChange={(e) =>
                  setFormData({ ...formData, comments: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter comments (optional)"
              ></textarea>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataFeed;
