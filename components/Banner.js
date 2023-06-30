"use client";

import { useState, useEffect } from "react";

const Banner = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/stocks");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="relative w-full bg-black h-5 text-white text-xs overflow-x-scroll hide-scrollbar">
            <div className="flex h-full">
                <div className=" flex-center bg-black gap-4 h-full animate-marquee1">
                    {data?.map((bank, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-center gap-4 whitespace-nowrap"
                            >
                                <span className="uppercase">{bank.name}</span>
                                <span>
                                    {Intl.NumberFormat("en-IN").format(
                                        bank.value
                                    )}
                                </span>
                                <span
                                    className={`${
                                        parseFloat(
                                            bank.percentChange.replace("%", "")
                                        ) >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {bank.percentChange.replace("%", "")}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className=" flex-center bg-black gap-4 h-full animate-marquee2">
                    {data?.map((bank, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-center gap-4 whitespace-nowrap"
                            >
                                <span className="uppercase">{bank.name}</span>
                                <span>
                                    {Intl.NumberFormat("en-IN").format(
                                        bank.value
                                    )}
                                </span>
                                <span
                                    className={`${
                                        parseFloat(
                                            bank.percentChange.replace("%", "")
                                        ) >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {bank.percentChange.replace("%", "")}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Banner;
