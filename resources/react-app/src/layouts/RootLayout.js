import React from "react";
import { Outlet, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FixedContact from "../components/fixedContact/FixedContact";

function RootLayout() {
    return (
        <>
            <Header />
            <FixedContact />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
