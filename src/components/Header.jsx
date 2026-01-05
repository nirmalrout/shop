import { useState } from "react"
import "../assets/css/header.css"

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const categories = ["All Categories", "Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Toys", "Beauty"]

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src='./src/assets/images/logo.png' alt='logo' className='logo'/>
        </div>

        {/* Main Content Section */}
        <div className="header-content">
          {/* Dropdown */}
          <div className="search-box">
          <div className="dropdown-wrapper">
            <button className="dropdown-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span>All Categories</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {categories.map((category, index) => (
                  <button key={index} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Section */}
          <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Search for more than 20,000 products" />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
                <path d="M12 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          </div>
          {/* Right Section */}
          <div className="header-actions">
            <button className="action-link">
              Apply for Store
              <br />
              Partner
            </button>

            <button className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            <button className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>

            <div className="cart-section">
              <button className="action-icon">
              </button>
              <div className="dropdown-wrapper cart-dropdown">
                <button className="cart-button">
                  Your Cart <span>▼</span>
                </button>
                <div className="cart-price">$1290.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}