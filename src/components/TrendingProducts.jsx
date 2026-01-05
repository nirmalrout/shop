import { useEffect, useState } from "react";
import "../assets/css/TrendingProduct.css";

const TABS = [
  { label: "ALL", value: "ALL" },
  { label: "FRUITS & VEGES", value: "CAT002" },
  { label: "JUICES", value: "CAT001" }
];

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.khusindia.com/rest/api/product")
      .then((res) => res.json())
      .then((res) => {
        const productArray = res?.result?.data?.result || [];
        setProducts(productArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    activeTab === "ALL"
      ? products
      : products.filter(
          (item) => item.category_id === activeTab
        );

  if (loading) return <p>Loading...</p>;

  return (
    <section className="trending">
      <div className="trending-header">
        <h2>Trending Products</h2>

        <div className="tabs">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              className={activeTab === tab.value ? "active" : ""}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item._id}>
            <button className="wishlist">♡</button>

            <div className="img-box">
              <img
                src={item.images?.[0]}
                alt={item.product_name}
              />
            </div>

            <h3>{item.product_name}</h3>

            <p className="meta">
              1 UNIT <span>⭐ 4.5</span>
            </p>

            <div className="price">
              ₹{item.price?.actual_price}
            </div>

            <div className="cart">
              <div className="qty">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="add-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
