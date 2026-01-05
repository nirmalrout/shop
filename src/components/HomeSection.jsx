import React, { useState } from "react";
import "../assets/css/homeSection.css";

const carouselData = [
  {
    title: "Heinz Tomato Ketchup",
    subtitle: "100% Natural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.",
    image: "./src/assets/images/product-thumb-1.png",
  },
  {
    title: "Organic Mustard",
    subtitle: "Fresh & Tasty",
    description: "High-quality organic mustard to spice up your meals.",
    image: "./src/assets/images/product-thumb-1.png",
  },
  {
    title: "Olive Oil",
    subtitle: "Pure & Healthy",
    description: "Premium olive oil to make your dishes delicious.",
    image: "./src/assets/images/product-thumb-1.png",
  },
];


const rightCards = [
  {
    title: "Fruits & Vegetables",
    discount: "20% Off",
    bgColor: "#eaf4e8",
    image: "./src/assets/images/ad-image-1.png",
  },
  {
    title: "Baked Products",
    discount: "15% Off",
    bgColor: "#fbeaea",
    image: "./src/assets/images/ad-image-2.png",
  },
];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="home-section">
      <div className="left-carousel">
        <div className="carousel-content">
          <h4 className="subtitle">{carouselData[currentIndex].subtitle}</h4>
          <h2 className="title">{carouselData[currentIndex].title}</h2>
          <p className="description">{carouselData[currentIndex].description}</p>
          <button className="shop-btn">Shop Collection</button>
        </div>
        <div className="carousel-image">
          <img src={carouselData[currentIndex].image} alt={carouselData[currentIndex].title} />
        </div>
        <div className="carousel-dots">
          {carouselData.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Right Cards */}
      <div className="right-cards">
        {rightCards.map((card, idx) => (
          <div key={idx} className="promo-card" style={{ backgroundColor: card.bgColor }}>
            <h3>{card.discount}</h3>
            <div style={{display:"flex",gap:"10px"}}>
                <hr />
                sale
            </div>
            <p className="card-title">{card.title}</p>
            <button className="shop-btn-small">Shop Collection →</button>
            <img src={card.image} alt={card.title} className="card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
