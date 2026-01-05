import "../assets/css/PromoBanner.css";

const PromoCard = ({ bgColor, tag, title, desc, image }) => {
  return (
    <div className="promo-card" style={{ backgroundColor: bgColor }}>
      <div className="promo-content">
        <span className="promo-tag">{tag}</span>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button className="promo-btn">SHOW NOW</button>
      </div>

      <div className="promo-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <section className="promo-section">
      <PromoCard
        bgColor="#fdeee9"
        tag="Upto 25% Off"
        title="Luxa Dark Chocolate"
        desc="Very tasty & creamy vanilla flavour creamy muffins."
        image="/images/ad-image-3.png"
      />

      <PromoCard
        bgColor="#eaf7fd"
        tag="Upto 25% Off"
        title="Creamy Muffins"
        desc="Very tasty & creamy vanilla flavour creamy muffins."
        image="/images/ad-image-4.png"
      />
    </section>
  );
};

export default PromoBanner;
