import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Footer from "./components/footer";
// import Navbar from "./components/navbar";

import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductsPage from "./pages/ProductsPage";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Layout from "./components/Layout";
// import BlogItem from "./components/blogitem";
import BlogPage from "./pages/blogspage";
import ArticlePage from "./pages/ArticlePage";
import { articles } from "./components/article";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/productsPage' element={<ProductsPage />} />
            <Route path='blogs' element={<BlogPage data={articles} />} />
            <Route path='article/:id' element={<ArticlePage data={articles} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
