import React from "react";
import "../assets/css/categorySection.css";

const categories = [
  {
    name: "Home & Living",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21v-7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7M2 14h20M9 12V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"/></svg>`
  },
  {
    name: "Grocery",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12"/></svg>`
  },
  {
    name: "Daily Spices",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.5 3.5c-2.5 2.5-4.5 7-4.5 7s-4.5 2-7 4.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0c2.5-2.5 4.5-7 4.5-7s4.5-2 7-4.5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0z"/><path d="m15 13 4 4"/></svg>`
  },
  {
    name: "Household",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M9 21h6a2 2 0 0 0 2-2V11H7v8a2 2 0 0 0 2 2Z"/><path d="M12 7v4"/></svg>`
  },
  {
    name: "Personal Care",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`
  },
  {
    name: "Baby & Kids",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"/><path d="M6.21 19.41a6.95 6.95 0 0 1 11.58 0"/><path d="M9 8h.01"/><path d="M15 8h.01"/><path d="M10 11a2 2 0 0 0 4 0"/></svg>`
  },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-header">
        <h2>Category</h2>
        <a href="#">View All Categories →</a>
      </div>
      <div className="category-list">
        {categories.map((cat, index) => (
            <div className="category-card" key={index}>
            {/* Update this line below */}
            <div 
                className="category-icon" 
                dangerouslySetInnerHTML={{ __html: cat.icon }} 
            />
            <div className="category-name">{cat.name}</div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CategorySection;
