import React from "react";
import FoodIteam from "../data/FoodIteam.js";

function Foodmenu() {
  return (
    
      <div className="container text-center mt-5 mx-5">
        <div className="row justify-content-center border-primary d-flex">
            {FoodIteam.map((menu) => {
              return (
                <div key={menu.id} className="col-1 my-2" style={{ width: "8rem" }}>
                            <div className="card card-block">
                                <img src={menu.icon} className="card-img mx-auto mt-1 justify-content-center align-items-center" alt="..." style={{ height: "64px", width: "64px" }} />
                                <div className={menu.cName}>
                                    <p className={menu.cName2}>{menu.name}</p>
                                </div>
                            </div>
                        </div>
              );
            })}
          
        </div>
      </div>
    
  );
}

export default Foodmenu;
