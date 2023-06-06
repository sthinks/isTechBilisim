import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SalesPoint from "../pages/SalesPoint/SalesPoint";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/blogDetail/BlogDetail";
import Brand from "../pages/brand/Brand";
import Product from "../pages/product/Product";
import AboutUs from "../pages/aboutus/AboutUs";
import ErrPage from "../pages/404/Error";
import Contact from "../pages/contact/Contact";
import Original from "../pages/original/Orginal";
import Franchise from "../pages/bayilik/Franchise";
import UserGuide from "../pages/userGuide/UserGuide";
import QueryLogin from "../components/queryLogin/QueryLogin";
import AdminLayout from "../layouts/AdminLayout";
import ProductQuery from "../pages/admin/ProductQuery";
import ProductList from "../pages/admin/ProductList";
import ProductAdd from "../pages/admin/ProductAdd";
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function AppRoute() {
    return (
        <div>
            <Routes>
                <Route>
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
                        {/* <Route
                            path="/product-detail/:slug"
                            element={<ProductDetail />}
                        /> */}
                        <Route path="/*" element={<ErrPage />} />
                        <Route path="/iletisim" element={<Contact />} />
                        <Route path="/orjinal" element={<Original />} />
                        <Route path="/bayilik" element={<Franchise />} />

                        <Route
                            path="/kullanim-kilavuzlari"
                            element={<UserGuide />}
                        />
                    </Route>

                    <Route path="/sorgula" element={<QueryLogin />} />

                    <Route path="" element={<ProtectedRoute />}>
                        <Route path="" element={<AdminLayout />}>
                            <Route
                                path="/sorgula/ara"
                                element={<ProductQuery />}
                            />
                            <Route
                                path="/sorgula/ekle"
                                element={<ProductAdd />}
                            />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default AppRoute;
