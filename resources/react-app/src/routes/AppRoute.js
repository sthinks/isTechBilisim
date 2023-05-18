import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SalesPoint from "../pages/SalesPoint/SalesPoint";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/blogDetail/BlogDetail";
import Brand from "../pages/brand/Brand";
import Product from "../pages/product/Product";
import FixedContact from "../components/fixedContact/FixedContact";
function AppRoute() {
    return (
        <div>
            <Header />
            <FixedContact />
            <Routes>
                <Route>
                    {/* Örnek tanımlama.*/}
                    <Route path="" element={<RootLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/hakkımızda" element={<Home />} />
                        <Route path="/markalar" element={<Brand />} />
                        <Route
                            path="/satis-noktalari"
                            element={<SalesPoint />}
                        />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogDetail />} />
                        <Route path="/brand/:slug" element={<Product />} />
                    </Route>
                </Route>
                <Route path="/register" element={<div>register</div>} />
                {/* Örnek tanımlama. 
      <Route path="/register" element={<Register />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default AppRoute;
