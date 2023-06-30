import React from "react";

export default function Special() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem", height: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">Todays Special: Eggs in a Basket</h5>
          <p className="card-text">Toast, But with an Egg inside</p>
          <p className="card-text">Only $8.99!</p>
          <p className="card-text">American</p>
        </div>
      </div>
    </div>
  );
}
