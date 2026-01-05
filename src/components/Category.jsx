import React from "react";
import "../assets/css/category.css";

const categories = [
  { id: 1, title: "Home & Living", image: "./src/assets/images/catergory1.png" },
  { id: 2, title: "Grocery", image: "./src/assets/images/category2.png" },
  { id: 3, title: "Daily Species", image: "./src/assets/images/category3.png" },
  { id: 4, title: "Household", image: "./src/assets/images/category4.png" },
  { id: 5, title: "Personal Care", image: "./src/assets/images/category5.png" },
  { id: 6, title: "Baby Kids", image: "./src/assets/images/category6.png" },
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
