"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const FeaturedCompanies = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/featured-companies");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="md:h-28">
            <h1 className="md:block hidden home-header px-6 py-2">
                Featured Companies
            </h1>
            <div className="w-full bg-blue-100 h-16">
                <div className="flex items-center px-2 md:px-4 md:gap-6 gap-2 w-full h-full overflow-x-scroll hide-scrollbar">
                    {data.map((company_logo_url, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    src={company_logo_url}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="md:max-h-10 md:min-h-[2.5rem] md:min-w-[8rem] md:max-w-[10rem] h-14 w-14 min-h-[3.5rem] min-w-[3.5rem] object-scale-down bg-white border-2 md:border-0 border-rose-600 object-center md:rounded-none rounded-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCompanies;
