import React from "react";
import { Outlet, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
