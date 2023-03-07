import React from "react";

function Foods({ chefDetails }) {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h2 style={{ color: "orange" }}>TRENDING CHEF</h2>
        <p>select trending chef and order now your favorite food now...</p>
      </div>
      <div className="row p-0 m-0">
        {chefDetails.chef.map((food) => {
          return (
            <div key={food.id} className="col  mt-5 p-0 mx-0">
              <div>
                <div
                  className="card mx-auto d-flex p-0"
                  style={{ width: "300px" }}
                >
                  <div>
                    <div className="card text-bg-dark">
                      <img
                        src={food.backGround}
                        className="card-img"
                        alt="..."
                      />
                      <div className="card-img-overlay">
                        <div className="card-title d-flex justify-content-between">
                          <img
                            src={food.ProfileIcon}
                            className="rounded-circle img-fluid"
                            alt=""
                            style={{ width: "18%" }}
                          />
                          <h2 className="d-flex">{food.chefName}</h2>
                        </div>
                        <div
                          className="card-footer d-flex px-0 justify-content-between align-items-center"
                          style={{ marginTop: "4rem" }}
                        >
                          <div className="card-text text-start">
                            <p className="m-0">{food.foodTitle}</p>
                            <p className="m-0">{food.foodType}</p>
                          </div>
                          <button className="btn btn-danger rounded-5">
                            $ 40.00
                          </button>
                        </div>
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
