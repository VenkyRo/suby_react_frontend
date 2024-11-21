import React, { useEffect, useState } from "react";
import { ApI_URL } from "../api";
import { MagnifyingGlass } from "react-loader-spinner";
const Chanins = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading,setloading] = useState(true);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 300;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth"
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${ApI_URL}/vendor/all-vendors`);
      const newData = await response.json();
      setVendorData(newData.vendors || []);
      setloading(false);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
      setloading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  return (
    <>
      <div className="loaderSection">
        {loading && (
          <>
            <div className="loader">food is 🍔Loading...</div>

            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </>
        )}
      </div>

      <div className="chainContainer">
        <div className="headerContainer">
          <h3>Top Restaurant Chains in Bangalore</h3>
          <div className="scrollButtons">
            <button onClick={() => handleScroll("left")}>&#8592; </button>
            <button onClick={() => handleScroll("right")}>&#8594; </button>
          </div>
        </div>
        <section
          className="chainSection"
          id="chainGallery"
          onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
        >
          {vendorData.map((vendor) => (
            <div className="vendorBox" key={vendor.id}>
              {vendor.firm.map((item, index) => (
                <div key={index} className="firmDetails">
                  <h4>{item.firmName}</h4>
                  <div className="firmimage">
                    <img src={`${ApI_URL}/uploads/${item.image}`} alt="Firm" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Chanins;
