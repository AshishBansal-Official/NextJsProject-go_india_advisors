"use client";

import { useEffect, useState } from "react";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";
import Image from "next/image";

const HomePage = () => {
    const [selected, setSelected] = useState("discussion_forum");
    const [discussionData, setDiscussionData] = useState([]);
    const [storiesData, setStoriesData] = useState([]);

    const fetchDiscussionData = async () => {
        const response = await fetch("/api/discussion-forum");
        const result = await response.json();
        setDiscussionData(result);
    };

    const fetchStoriesData = async () => {
        const response = await fetch("/api/market-stories");
        const result = await response.json();
        setStoriesData(result);
    };

    useEffect(() => {
        const fetchData = () => {
            fetchDiscussionData();
            fetchStoriesData();
        };
        fetchData();
    }, []);

    return (
        <div className="h-full w-full ">
            {/* Desktop View */}
            <div className="h-full md:flex hidden">
                {/* Discussion Forum */}
                <div className="2xl:min-w-[50rem] xl:min-w-[40rem] lg:min-w-[30rem] md:min-w-[25rem] min-w-[20rem] px-6 flex flex-col">
                    <h1 className="home-header pt-4 h-14">Discussion Forum</h1>
                    <DiscussionForum data={discussionData} />
                </div>
                {/* Market Stories */}
                <div className="flex flex-col">
                    <h1 className="home-header py-4">Market Stories</h1>
                    <MarketStories data={storiesData} />
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col md:hidden">
                <div className="sticky top-0 w-full z-10 flex-center text-white">
                    <div
                        onClick={() => setSelected("discussion_forum")}
                        className={`w-1/2 flex-center cursor-pointer h-10 ${
                            selected === "discussion_forum"
                                ? "bg-app-dark-blue border-b-2 border-b-rose-600"
                                : "bg-app-light-blue"
                        }`}
                    >
                        Discussion Forum
                    </div>
                    <div
                        onClick={() => setSelected("market_stories")}
                        className={`w-1/2 flex-center cursor-pointer h-10 ${
                            selected === "market_stories"
                                ? "bg-app-dark-blue box-border border-b-2 border-b-rose-600"
                                : "bg-app-light-blue"
                        }`}
                    >
                        Market Stories
                    </div>
                </div>
                <div>
                    {selected === "discussion_forum" ? (
                        <DiscussionForum data={discussionData} />
                    ) : (
                        <MarketStories data={storiesData} />
                    )}
                </div>
                {/* Space for the bottom navigation bar */}
                <div className="h-10 w-full"></div>
                {/* bottom navigation bar */}
                <div className="fixed z-30 bottom-0 left-0 w-full flex h-10 bg-app-light-blue">
                    <div className="w-1/5 flex-center cursor-pointer h-full">
                        <Image
                            src="/assets/icons/dashboard-icon.svg"
                            alt=""
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="w-1/5 flex-center cursor-pointer h-full">
                        <Image
                            src="/assets/icons/category-icon.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="w-1/5 flex-center cursor-pointer h-full border-b-2 border-rose-600">
                        <Image
                            src="/assets/icons/home-icon.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="w-1/5 flex-center cursor-pointer h-full">
                        <Image
                            src="/assets/icons/chat-icon.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="w-1/5 flex-center cursor-pointer h-full">
                        <Image
                            src="/assets/icons/list-icon.svg"
                            alt=""
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
