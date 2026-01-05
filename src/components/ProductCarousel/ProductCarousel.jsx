import { useRef } from "react";
import "./ProductCarousel.css";

const ProductCarousel = ({ title, products, viewAllText }) => {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 280;
    trackRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>

        <div className="carousel-actions">
          <span className="view-all">{viewAllText} →</span>
          <button className="nav-btn" onClick={() => scroll("prev")}>‹</button>
          <button className="nav-btn" onClick={() => scroll("next")}>›</button>
        </div>
      </div>

      <div className="carousel-track" ref={trackRef}>
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
              <button className="wishlist">♡</button>
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <div className="meta">
                {item.unit} ⭐ {item.rating}
              </div>

              <div className="price">${item.price}.00</div>

              <div className="cart-actions">
                <div className="qty">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <span className="add-cart">Add to Cart</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
