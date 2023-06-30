"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PostCard from "./PostCard";

const DiscussionForum = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/discussion-forum");
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="relative mt-2 md:mt-0 xl:px-16 pl-6 pr-4 md:px-4 h-[calc(100%-3.5rem)]">
            <h2 className="h-8 text-xl font-semibold">Filters</h2>
            <div className="h-16 flex-center xl:flex-row bg-white shadow-[2px_4px_3px_rgba(0,0,0,0.38)] rounded-lg py-4 px-2 lg:p-4 gap-2 md:gap-1 xl:gap-4 whitespace-nowrap">
                <div className="flex-center gap-1 md:gap-0.5 xl:gap-4">
                    <div className="sector-button bg-rose-700">Sector 1</div>
                    <div className="sector-button bg-blue-800">Sector 2</div>
                    <div className="sector-button bg-yellow-500">Sector 3</div>
                </div>
                <div className="relative flex-center rounded-full flex-grow">
                    <input
                        placeholder="Search Here"
                        className="rounded-full h-8 pr-4 pl-8 md:pl-6 lg:pl-8 text-sm bg-search-bg font-normal focus:outline-none w-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)]"
                    />
                    {/* Search Icon */}
                    <div className="absolute left-0 rounded-r-full px-2 md:px-1 lg:px-2 py-2">
                        <Image
                            src="/assets/icons/search-icon.svg"
                            alt="search"
                            width={16}
                            height={16}
                            className="cursor-pointer min-w-[20px]"
                        />
                    </div>
                </div>
            </div>
            {/* Posts */}
            <div className="flex-grow w-full h-[calc(100%-7rem)] mt-4 md:pr-2 md:overflow-y-scroll hide-scrollbar-desktop app-scrollbar">
                {data?.map((post, index) => {
                    return (
                        <PostCard
                            key={index}
                            imageUrl={post.imageUrl}
                            name={post.name}
                            desc={post.desc}
                            sector={post.sector}
                            likes={post.likes}
                            views={post.views}
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DiscussionForum;
