import React from "react";
import axios from "axios";

const magazines = [
  { id: 1, title: "Tech Today", price: 199 },
  { id: 2, title: "Science Weekly", price: 149 },
];

const MagazineList = () => {
  const handleBuy = async (magazine) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/payments/create-order", {
        amount: magazine.price,
        currency: "INR",
      });

      const options = {
        key: "rzp_test_ABC123xyz", // Replace with your Razorpay Key ID
        amount: data.order.amount,
        currency: "INR",
        name: "Digital Magazine Store",
        description: `Buying ${magazine.title}`,
        order_id: data.order.id,
        handler: async function (response) {
          const verificationRes = await axios.post("http://localhost:5000/api/payments/verify-payment", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verificationRes.data.success) {
            alert("Payment Successful & Verified! Magazine Unlocked.");
            // Unlock download / access logic here
          } else {
            alert("Payment Verification Failed.");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <h2>Magazines</h2>
      {magazines.map((magazine) => (
        <div key={magazine.id}>
          <h4>{magazine.title} - ₹{magazine.price}</h4>
          <button onClick={() => handleBuy(magazine)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default MagazineList;
