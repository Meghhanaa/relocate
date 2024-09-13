import React, { useState } from 'react';
import PopularImg1 from '../assets/img/popular1.jpg';
import PopularImg2 from '../assets/img/popular2.jpg';
import PopularImg3 from '../assets/img/popular3.jpg';
import PopularImg4 from '../assets/img/popular4.jpg';
import PopularImg5 from '../assets/img/popular5.jpg';

// Component to display a single residence card
const ResidenceCard = ({ imgSrc, price, title, description }) => {
  return (
    <article className="popular__card swiper-slide">
      <img className="popular__img" src={imgSrc} alt={title} />
      <div className="popular__data">
        <h2 className="popular__price">
          <span>$</span>{price}
        </h2>
        <h3 className="popular__title">{title}</h3>
        <p className="popular__description">{description}</p>
      </div>
    </article>
  );
};

// Main component to display all residence cards and a form to add new ones
const PopularResidence = () => {
  const [properties, setProperties] = useState([
    { imgSrc: PopularImg1, price: '66,356', title: 'Indrapuri, BHopal', description: 'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876' },
    { imgSrc: PopularImg2, price: '35,159', title: 'MP Nagar, Bhopal', description: 'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876' },
    { imgSrc: PopularImg3, price: '75,043', title: 'Arera Hills, Bhopal', description: 'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876' },
    { imgSrc: PopularImg4, price: '62,024', title: 'Kolar , Bhopal', description: 'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876' },
    { imgSrc: PopularImg5, price: '47,043', title: 'Awadh Nagar, Bhopal', description: 'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876' }
  ]);

  const [newProperty, setNewProperty] = useState({
    imgSrc: '',
    price: '',
    title: '',
    description: ''
  });

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  // Handle image file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProperty({ ...newProperty, imgSrc: reader.result }); // Store base64 string as imgSrc
    };

    if (file) {
      reader.readAsDataURL(file); // Convert the image file to base64 string
    }
  };

  // Add new property to the list
  const addProperty = () => {
    if (newProperty.imgSrc && newProperty.price && newProperty.title && newProperty.description) {
      setProperties([...properties, newProperty]);
      setNewProperty({ imgSrc: '', price: '', title: '', description: '' }); // Reset form fields
    } else {
      alert('Please fill out all fields and upload an image.');
    }
  };

  return (
    <section className="section" id="popular">
      <div className="container">
        <span className="section__subtitle">Best Choice</span>
        <h2 className="section__title">
          Popular Residences<span>.</span>
        </h2>

        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {properties.map((property, index) => (
              <ResidenceCard
                key={index}
                imgSrc={property.imgSrc}
                price={property.price}
                title={property.title}
                description={property.description}
              />
            ))}
          </div>

          <div className="swiper-button-next">
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="bx bx-chevron-left"></i>
          </div>
        </div>

        {/* Form to add a new property */}
        <div className="add-property-form">
          <h3>Add New Property</h3>
          <input
            className="megh-1" // Keep the original class
            type="file"
            accept="image/*"
            name="imgSrc"
            onChange={handleFileChange}
          />
          <input
            className="megh-1" // Keep the original class
            type="text"
            name="price"
            placeholder="Price"
            value={newProperty.price}
            onChange={handleInputChange}
          />
          <input
            className="megh-1" // Keep the original class
            type="text"
            name="title"
            placeholder="Title"
            value={newProperty.title}
            onChange={handleInputChange}
          />
          <input
            className="megh-1" // Keep the original class
            type="text"
            name="description"
            placeholder="Description"
            value={newProperty.description}
            onChange={handleInputChange}
          />
          <a href="#" className="btn button" onClick={addProperty}>
            Add Property
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularResidence;
