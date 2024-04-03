import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import "./medication.css";
import { FaShoppingCart } from "react-icons/fa";

function Medication(userId) {
  const [medications, setMedications] = useState([]);
  const [filteredMedications, setFilteredMedications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);
  const [medicineQuantities, setMedicineQuantities] = useState({});

  useEffect(() => {
    fetch("/medications")
      .then((response) => response.json())
      .then((data) => {setMedications(data.medications)
    })
      .catch((error) => console.error("Error fetching medications:", error));
  }, []);

  console.log(medications)
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() !== "") {
      // If there's an active search term, filter the medications
      const filteredMedications = medications.filter((medication) =>
        medication.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMedications(filteredMedications);
    } else {
      // If no active search term, display all medications
      setFilteredMedications([]);
    }
  };
  const handleAddToCart = (medicationId) => {
    const data = {
      customer_id: userId, // Replace with the actual user ID
      medication_id: medicationId,
      quantity: 2,
    };
  
    // Adjust the URL and parameters based on your backend
    fetch("/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAddedToCart(true);
      })
      .catch((error) => console.error("Error adding to cart:", error));
  };

  const handleQuantityChange = (medicationId, newQuantity) => {
    setMedicineQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicationId]: newQuantity,
    }));
  };

  
  return (
    <div
      className=""
    //   style={{ backgroundImage: "linear-gradient(225deg, #15cfe8, #031a34)" }}
    >
    <div className="top"><SearchBar onSearch={handleSearch} medications={medications}/></div>
       <Link to={`/cart`}> <FaShoppingCart /></Link>
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      <div className="container ">
        {(searchTerm.trim() === "" ? medications : filteredMedications).map((medication) => (
          <div key={medication.MedicationID} className="shoe-item">
            <strong>Name: {medication.Name}</strong>
            <p>Description:{medication.Description} </p>
            <p>StockLevel:{medication.StockLevel} </p>
            <p>Price: Ksh.{medication.price} </p>
            <div className="cta">
            <label>
                        Quantity:
                        <input
                          type="number"
                          value={medicineQuantities[medication.MedicationID] || 1}
                          onChange={(e) =>
                            handleQuantityChange(
                              medication.MedicationID,
                              parseInt(e.target.value, 10) || 1
                            )
                          }
                          min="1"
                          className="border border-gray-300 px-2 py-1 mr-2"
                        />
                      </label>
            <button className="btn" onClick={() => handleAddToCart(medication.MedicationID)}>
             Add to Cart <FaShoppingCart />
            </button>

      </div>
      {addedToCart && (
        <div className="added-to-cart-message">
          <FaShoppingCart /> Added to Cart!
        </div>
      )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Medication;