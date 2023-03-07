import React from "react";
import food from "../assets/food.jpg";
function SearchBar() {
  return (
    <div id="carouselExampleDark">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            className="w-100 object-fit-cover"
            src={food}
            alt="Not found"
            height={500}
          />
          <div
            className="carousel-caption d-flex justify-content-center align-item-center"
            style={{ marginBottom: "200px" }}
          >
            <div className="input-group d-flex justify-content-center align-item-center">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>New York</option>
                <option value="1">Rome</option>
                <option value="2">Giza</option>
                <option value="3">Sabinas</option>
                <option value="3">Beijing </option>
                <option value="3">Shanghai</option>
                <option value="3">San Pedro</option>
                <option value="3">Chicago</option>
                <option value="3">Houston</option>
                <option value="3">Cairo</option>
              </select>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="button" className="btn btn-primary">
                Search{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
