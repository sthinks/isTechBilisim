import React from "react";

function BlogBanner({ blog }) {
    return (
        <div className="bg-[#2B2B2B]  h-[300px]  max-md:h-[250px]">
            <div className="w-full flex justify-end items-center h-full max-md:justify-center max-md:items-center">
                <p className="text-white font-bold text-4xl mt-36 mr-56 max-md:mt-0 max-md:mr-0">
                    Blog
                </p>
            </div>
            <div className="bg-[#FF855A] w-56 h-96 relative -top-64 left-36 max-md:hidden" />
        </div>
    );
}

export default BlogBanner;
