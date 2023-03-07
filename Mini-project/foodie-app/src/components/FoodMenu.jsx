import React, { useState } from "react";
import FoodIteam from "../data/FoodIteam.js";
import ChefData from "../data/ChefData.js";
import Foods from "./Foods.jsx";

function Foodmenu() {
  const [currentFood, setCurrentFood] = useState(FoodIteam[0]);
  const [chefDetail, setChefDetail] = useState(ChefData[0]);

  return (
    <>
      <div className="container text-center mt-5 overflow-auto">
        <div className="row justify-content-between border-primary d-flex flex-nowrap">
          {FoodIteam.map((menu) => {
            return (
              <div
                key={menu.id}
                className="col-1 my-2 overflow-auto"
                style={{ width: "8rem" }}
              >
                <div
                  className="card card-block flex-nowrep"
                  value={currentFood}
                  onClick={() => {
                    setCurrentFood(FoodIteam[menu.id - 1]);
                    setChefDetail(ChefData[menu.id - 1]);
                  }}
                >
                  <img
                    src={menu.icon}
                    className="card-img mx-auto mt-1 justify-content-center align-items-center"
                    alt="..."
                    style={{ height: "64px", width: "64px" }}
                  />
                  <div className="card-header">
                    <p className="card-text">{menu.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Foods chefDetails={chefDetail} />
    </>
  );
}

export default Foodmenu;
