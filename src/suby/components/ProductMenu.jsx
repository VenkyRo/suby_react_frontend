import React, { useEffect, useState } from "react";
import { ApI_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId ,firmName } = useParams();
 

  const productHandler = async () => {
    try {
      const response = await fetch(`${ApI_URL}/product/${firmId}/products`);
      const newProduct = await response.json();
      setProducts(newProduct.products);
    } catch (error) {
      console.error("failed fectch product", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);
  return (
    <>
      <TopBar></TopBar>
      <section className="productSecssion">
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productBox">
              <div>
                <div>
                  <strong>{item.productName}</strong>
                </div>
                <div>₹{item.price}</div>
                <div>{item.descrption}</div>
              </div>

              <div className="productgropu">
                <img
                  src={`${ApI_URL}/uploads/${item.image}`}
                  alt={item.firmName}
                />
                <div className="addBtn">Add</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
