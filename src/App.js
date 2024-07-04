import React from "react";
import "./App.css";
// import Footer from "./components/footer";
// import Navbar from "./components/navbar";
import HomePage from "./pages/Homepage";
// import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductsPage from "./pages/ProductsPage";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/homepage";
// import ContactUs from "./pages/ContactUs";
import Layout from "./components/Layout";
import BlogItem from "./components/blogitem";
import BlogPage from "./pages/blogspage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/productsPage' element={<ProductsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
