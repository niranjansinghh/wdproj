import React, { useState } from "react";
import "./AddHouse.css";

const AddHouse = () => {
  const [formData, setFormData] = useState({
    propertyName: "",
    address: "",
    propertyType: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("House details submitted successfully!");
  };

  return (
    <section className="addhouse mb">
      <div className="form-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Add House Details</h2>

          {/* Property Name */}
          <div className="form-group">
            <label htmlFor="propertyName">Property Name</label>
            <input
              type="text"
              id="propertyName"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              placeholder="Enter property name"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </div>

          {/* Property Type */}
          <div className="form-group">
            <label htmlFor="propertyType">Property Type</label>
            <input
              type="text"
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              placeholder="E.g., Apartment, Villa"
              required
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label htmlFor="price">Price (in USD)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description of the property"
              rows="5"
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label htmlFor="image">Upload Property Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Submit Button */}
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddHouse;
