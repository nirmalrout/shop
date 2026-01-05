import { useState, useEffect } from 'react';
import ProductCarousel from './ProductCarousel/ProductCarousel.jsx'

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://api.khusindia.com/rest/api/product");
      const data = await res.json();

      const items = data?.result?.data?.result || [];

      const mappedProducts = items.map(item => ({
        id: item._id,
        name: item.product_name,
        image: item.images?.[0] ?? "",
        price: item.price?.actual_price ?? 0,
        unit: item.quantity + " pcs",
        rating: 4.5  
      }));

      setProducts(mappedProducts);
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading products...</p>;

  return (
    <>
      <ProductCarousel
        title="Best Selling Products"
        products={products}
        viewAllText="View All Categories"
      />
    </>
  );
};


export default BestSellingProducts