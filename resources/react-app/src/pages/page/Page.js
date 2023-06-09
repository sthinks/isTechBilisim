import React, { useLayoutEffect, useState } from "react";
import Banner from "../../components/Banner";
import Loading from "../../Components/loading/Loading";
import allService from "../../services/allService";
import { useParams } from "react-router-dom";
function Page() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const slug = useParams();

    const getPages = async (slug) => {
        setLoading(true);
        const result = await allService.getPages(slug);
        if (result) {
            setLoading(false);

            setData(result[0]);
        }
    };
    useLayoutEffect(() => {
        getPages(slug.slug);
    }, [slug]);
    return loading ? (
        <Loading />
    ) : (
        <div>
            <Banner brand={data?.title} />
            <div className="container mx-auto px-36 max-lg:px-8 mt-10">
                <p dangerouslySetInnerHTML={{ __html: data?.body }} />
            </div>
        </div>
    );
}

export default Page;
