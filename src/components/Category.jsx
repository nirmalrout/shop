import React from "react";
import "../assets/css/category.css";

const categories = [
  { id: 1, title: "Home & Living", image: "/images/catergory1.png" },
  { id: 2, title: "Grocery", image: "/images/category2.png" },
  { id: 3, title: "Daily Species", image: "/images/category3.png" },
  { id: 4, title: "Household", image: "/images/category4.png" },
  { id: 5, title: "Personal Care", image: "/images/category5.png" },
  { id: 6, title: "Baby Kids", image: "/images/category6.png" },
];

const Category = () => {
  return (
    <section className="categories">
      
      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <p>{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
