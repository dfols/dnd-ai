"use client";
import { useState } from "react";

export default function CreateCharacterPage() {
  const [formData, setFormData] = useState({
    characterName: "",
    race: "",
    characterClass: "",
    // ... other character attributes
  });

  const [addedProperties, setAddedProperties] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const optionalProperties = [
    "background",
    "alignment",
    "skills",
    "equipment",
    "spells",
    "personalityTraits",
    "bonds",
    "flaws",
    "ideals",
    // ... you can add more here
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProperty = (property) => {
    if (!addedProperties.includes(property)) {
      setAddedProperties([...addedProperties, property]);
    }
  };

  const handlePropertyChange = (e, property) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [property]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/create-character", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      // redirect to character creation or another page
    } else {
      // handle error
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="relative p-10 space-y-4 bg-white rounded shadow-lg w-3/4"
      >
        <h2 className="orange_gradient text-center text-4xl font-bold mb-8">
          Create Character
        </h2>
        <div className="flex flex-col space-y-4">
          {/* Required Fields */}
          <div className="flex space-x-4">
            <label htmlFor="characterName" className="w-1/4">
              Character Name
            </label>
            <input
              id="characterName"
              type="text"
              name="characterName"
              placeholder="Character Name"
              value={formData.characterName}
              onChange={handleChange}
              required
              className="border p-2 w-3/4"
            />
          </div>
          <div className="flex space-x-4">
            <label htmlFor="race" className="w-1/4">
              Race
            </label>
            <input
              id="race"
              type="text"
              name="race"
              placeholder="Race"
              value={formData.race}
              onChange={handleChange}
              required
              className="border p-2 w-3/4"
            />
          </div>
          <div className="flex space-x-4">
            <label htmlFor="characterClass" className="w-1/4">
              Class
            </label>
            <input
              id="characterClass"
              type="text"
              name="characterClass"
              placeholder="Class"
              value={formData.characterClass}
              onChange={handleChange}
              required
              className="border p-2 w-3/4"
            />
          </div>
          {/* ... other required input fields */}
          {addedProperties.map((property) => (
            <div key={property} className="flex space-x-4">
              <label htmlFor={property} className="w-1/4">
                {property}
              </label>
              <input
                id={property}
                type="text"
                name={property}
                placeholder={property}
                value={formData[property] || ""}
                onChange={(e) => handlePropertyChange(e, property)}
                className="border p-2 w-3/4"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Character
          </button>

          <div className="relative">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              +
            </button>
            {showDropdown && (
              <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {optionalProperties.map((property) => (
                    <button
                      key={property}
                      type="button"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => {
                        handleAddProperty(property);
                        setShowDropdown(false);
                      }}
                    >
                      {property}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
