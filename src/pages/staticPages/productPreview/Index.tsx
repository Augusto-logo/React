import React from "react";
import "./index.css";

export default function Index() {
  return (
    <main>
      <div className="bg-blue-100">
        <img
          src="src\pages\staticPages\productPreview\assets\image-product-desktop.jpg"
          alt="Product-image"
        />
      </div>
      <div>
        <span className="product">Perfume</span>

        <h1>Gabrielle Essence Eau De Parfum</h1>

        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div>
          <span className="price">$149.99</span>
          <span className="old-price">$169.99</span>
        </div>

        <button>Add to Cart</button>
      </div>
    </main>
  );
}
