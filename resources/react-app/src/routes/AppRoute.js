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
import AboutUs from "../pages/aboutus/AboutUs";
import ErrPage from "../pages/404/Error";
import Contact from "../pages/contact/Contact";
import Original from "../pages/original/Orginal";
import ProductDetail from "../pages/productDetails/ProductDetail";
import Franchise from "../pages/bayilik/Franchise";
import UserGuide from "../pages/userGuide/UserGuide";
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
                        <Route path="/hakkimizda" element={<AboutUs />} />
                        <Route
                            path="/product-detail/:slug"
                            element={<ProductDetail />}
                        />
                        <Route path="/*" element={<ErrPage />} />
                        <Route path="/iletisim" element={<Contact />} />
                        <Route path="/orjinal" element={<Original />} />
                        <Route path="/bayilik" element={<Franchise />} />
                        <Route
                            path="/kullanim-kilavuzlari"
                            element={<UserGuide />}
                        />
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
