import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer/Footer2";
import Navbar from "./components/Navbar";
import Slider from "./components/sidebar.jsx/Slider";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Home from "./components/Home";
import OutWear from "./pages/Womens/OutWear";
import WomenDress from "./pages/Womens/WomenDress";
import WomenPlusSize from "./pages/Womens/WomenPlusSize";
import WomenSwimwear from "./pages/Womens/WomenSwimwear";
import WomenTops from "./pages/Womens/WomenTops";
import WomenTrending from "./pages/Womens/WomenTrending";
import Womentwopieceset from "./pages/Womens/Womentwopieceset";
import RequireAuth from "./hoc/RequireAuth";
import Login from "./components/Login";  
import Product from "./components/product/Product";
import Signup from "./components/Signup";



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="div2">
        <Slider />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Mens />} />
            <Route path="/women" element={<Women />} />
            <Route path="/outwear" element={<OutWear />} />
            <Route path="/womendress" element={<WomenDress />} />
            <Route path="/womenplussize" element={<WomenPlusSize />} />
            <Route path="/womenswimwear" element={<WomenSwimwear />} />
            <Route path="/womentops" element={<WomenTops />} />
            <Route path="/womentrending" element={<WomenTrending />} />
            <Route path="/womentwopiece" element={<Womentwopieceset />} />
            <Route path="/login" element={<Login />} />    
            <Route path="/signin" element={<Signup/>} />

            {/* :id part */}
            <Route
              path="/men/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/women/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/outwear/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/womendress/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/womenplussize/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/womenswimwear/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/womentops/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/womentrending/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/womentwopiece/:name/:id"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;
