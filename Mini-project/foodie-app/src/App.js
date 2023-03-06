import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import SearchBar from "./components/SearchBar";
import FoodMenu from "./components/FoodMenu";
import Footer from "./components/Footer";
import Foods from "./components/Foods";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Footer/> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBar />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<FoodMenu />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Foods/>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
