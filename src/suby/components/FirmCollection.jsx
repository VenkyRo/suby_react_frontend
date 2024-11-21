import React, { useEffect, useState } from "react";
import { ApI_URL } from "../api";
import { Link } from "react-router-dom";

const FirmCollection = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion ,setSelectedRegion] = useState("All");
  const [activeCategory,seactiveCateogry] = useState("All");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${ApI_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("Failed to fetch firm data");
      console.error("Error fetching firm data:", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);


  const fileterHandler = (region,category)=>{
    setSelectedRegion(region);
    seactiveCateogry(category);
  }


  return (
    <>
      <div className="heading">
        <h3>Restaurants with Online Food Delivery in Bangalore</h3>
        <div className="filerBtn">
          <button
            onClick={() => fileterHandler("All", "all")}
            className={activeCategory === "all" ? "activeButton" : ""}
          >
            All
          </button>
          <button
            onClick={() => fileterHandler("south-Indian", "south-Indian")}
            className={activeCategory === "south-Indian" ? "activeButton" : ""}
          >
            South-Indian
          </button>
          <button
            onClick={() => fileterHandler("north-Indian", "north-Indian")}
            className={activeCategory === "north-Indian" ? "activeButton" : ""}
          >
            North-Indian
          </button>
          <button
            onClick={() => fileterHandler("chinese", "chinese")}
            className={activeCategory === "chinese" ? "activeButton" : ""}
          >
            Chinese
          </button>
          <button
            onClick={() => fileterHandler("bakery", "bakery")}
            className={activeCategory === "bakery" ? "activeButton" : ""}
          >
            Bakey
          </button>
        </div>
      </div>
      <section className="firmSection">
        {firmData.map((product) => {
          return product.firm.map((item, index) => {
            if (
              selectedRegion === "All" ||
              item.region.includes(selectedRegion)
            ) {
              return (
                <Link
                  to={`/products/${item._id}/${item.firmName}`}
                  className="links"
                >
                  <div className="firmCard" key={index}>
                    <div className="firmImage">
                      <img
                        src={`${ApI_URL}/uploads/${item.image}`}
                        alt={item.firmName}
                      />
                    </div>
                    <div className="firmDetails">
                      <p className="firmPrice">{item.offer}</p>
                      <h4 className="firmName">{item.firmName}</h4>
                      <p className="firmCategory">{item.region.join(", ")}</p>
                      <p className="firmPrice">{item.area}</p>
                    </div>
                  </div>
                </Link>
              );
            }
          });
          return null;
        })}
      </section>
    </>
  );
};

export default FirmCollection;
