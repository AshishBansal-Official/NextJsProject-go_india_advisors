"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MarketStories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/market-stories");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="h-full mt-6 md:mt-4 overflow-y-scroll hide-scrollbar">
            <div className="flex items-center md:items-start flex-col md:flex-row md:flex-wrap gap-y-6 gap-x-1 lg:gap-x-10 mb-6">
                {data?.map((story, index) => {
                    return (
                        <div
                            key={index}
                            className="relative w-72 h-48 aspect-video rounded-lg overflow-hidden"
                        >
                            <Image
                                src={story.image}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority={true}
                                className="w-full"
                            />
                            <div className="absolute bottom-0 w-full left-0 h-[4.5rem] lg:h-20 bg-black/30 rounded-lg text-white pl-4 pr-16 md:pr-24 py-2 text-sm overflow-hidden">
                                {story.desc}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MarketStories;
