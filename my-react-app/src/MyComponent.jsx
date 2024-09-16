import React, { useState } from "react";

function MyComponent() {
  //onClick Function
  // const [name, setName] = useState("Guest");
  // const [age, setAge] = useState(0);
  // const [isEmployed, setIsEmployed] = useState(false);

  // const updateName = () => {
  //   setName("Spongebob");
  // };

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const toggleEmployedStatus = () => {
  //   setIsEmployed(!isEmployed);
  // };
  // return (
  //   <div>
  //     <p>Name: {name}</p>
  //     <button onClick={updateName}>Set Name</button>
  //     <p>age: {age}</p>
  //     <button onClick={incrementAge}>Increment Age</button>
  //     <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
  //     <button onClick={toggleEmployedStatus}>Toggle Status</button>
  //   </div>
  // );

  //onChange Function

  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuatityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  function handleYearChange(event) {
    setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favourite car is : {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <input value={name} onChange={handleNameChange} />
      <br />

      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuatityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery Instruction"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment:{payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
