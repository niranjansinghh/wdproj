import React from "react";
import './PropertyDescription.css'; // Ensure you have the CSS file imported for styling

const PropertyDescription = () => {
  const property = {
    name: "Beautiful Family Home",
    category: "For Sale",
    location: "123 Main St, Springfield",
    price: "$500,000",
    description: "A beautiful 4-bedroom home with a large backyard and modern kitchen. Perfect for a family looking for a spacious home.",
    images: [
      "https://via.placeholder.com/600x400?text=Property+Image+1",
      "https://via.placeholder.com/600x400?text=Property+Image+2"
    ]
  };

  return (
    <div className="property-description">
      <div className="property-header">
        <h1>{property.name}</h1>
        <p className="property-address">{property.location}</p>
      </div>
      <div className="property-image">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property Image ${index + 1}`} />
        ))}
      </div>
      <div className="property-details">
        <p className="price">{property.price}</p>
        <p><strong>Category:</strong> {property.category}</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDescription;