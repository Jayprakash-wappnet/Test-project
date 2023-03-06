import React from "react";
import FoodMenu from "../data/FoodMenu";

function Foods() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h2 style={{ color: "orange" }}>TRENDING CHEF</h2>
        <p>select trending chef and order now your favorite food now...</p>
      </div>
      <div className="row">
      {FoodMenu.map((food) => {
        return (
          <div className="col mx-auto mt-5 justify-content-center d-flex">
            <div >
              <div className="card mx-3 d-flex">
                <div>
                  <div className="card text-bg-dark d-flex">
                    <img src={food.backgroundImg} class="card-img" alt="..." />
                    <div className="card-img-overlay">
                      <div className="card-title d-flex">
                        <img
                          src={food.image}
                          className="rounded-circle img-fluid d-flex"
                          alt=""
                          style={{ width: "18%" }}
                        />
                        <h2 className="d-flex">{food.name}</h2>
                      </div>
                      <p className="card-text d-flex">
                        <small>Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
}

export default Foods;
