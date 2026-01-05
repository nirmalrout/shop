import { useRef } from "react";
import "../assets/css/newlyArrivedBrands.css";

const brands = [
  {
    id: 1,
    title: "Amber Jar",
    desc: "Honey best nectar you wish to get",
    image: "/images/NewlyArrived/product-thumb-11.jpg"
  },
  {
    id: 2,
    title: "Amber Jar",
    desc: "Honey best nectar you wish to get",
    image: "/images/NewlyArrived/product-thumb-12.jpg"
  },
  {
    id: 3,
    title: "Amber Jar",
    desc: "Honey best nectar you wish to get",
    image: "/images/NewlyArrived/product-thumb-13.jpg"
  },
  {
    id: 4,
    title: "Amber Jar",
    desc: "Honey best nectar you wish to get",
    image: "/images/NewlyArrived/product-thumb-14.jpg"
  }
];

const NewlyArrivedBrands = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };

  return (
    <section className="brands">
      <div className="brands-header">
        <h2>Newly Arrived Brands</h2>

        <div className="brands-actions">
          <span>View All Categories →</span>
          <button className="nav-btn" onClick={scrollLeft}>‹</button>
          <button className="nav-btn" onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="brands-carousel" ref={sliderRef}>
        {brands.map((item) => (
          <div className="brand-card" key={item.id}>
            <div className="brand-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="brand-info">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewlyArrivedBrands;
