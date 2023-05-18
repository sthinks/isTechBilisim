import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div className="w-full">
            {/* Buradaki div'e genel container css verilebilir. */}
            <Outlet />
        </div>
    );
}

export default RootLayout;
