import Image from "next/image";
import React from "react";
import PostCard from "./PostCard";

const data = [
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/1.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: "/assets/images/market_stories/2.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];

const HomePage = () => {
    return (
        <div className="h-full w-full ">
            <div className="flex h-full">
                {/* Discussion Forum */}
                <div className="2xl:min-w-[50rem] xl:min-w-[40rem] lg:min-w-[30rem] md:min-w-[25rem] min-w-[20rem] px-6 flex flex-col">
                    <h1 className="home-header pt-4 h-14">Discussion Forum</h1>
                    <div className="relative xl:px-16 px-4 h-[calc(100%-3.5rem)]">
                        <h2 className="h-8 text-xl font-semibold">Filters</h2>
                        <div className="h-16 flex-center  xl:flex-row bg-white shadow-[2px_4px_3px_rgba(0,0,0,0.38)] rounded-lg p-4 gap-2 md:gap-1 xl:gap-4 whitespace-nowrap">
                            <div className="flex-center gap-2 md:gap-0.5 xl:gap-4">
                                <div className="sector-button bg-rose-700 md:px-2 lg:px-4">
                                    Sector 1
                                </div>
                                <div className="sector-button bg-blue-800 md:px-2 lg:px-4">
                                    Sector 2
                                </div>
                                <div className="sector-button bg-yellow-500 md:px-2 lg:px-4">
                                    Sector 3
                                </div>
                            </div>
                            <div className="relative flex-center rounded-full">
                                <input
                                    placeholder="Search Here"
                                    className="rounded-full h-8 pr-4 md:pl-6 lg:pl-8 text-sm bg-search-bg font-normal focus:outline-none w-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)]"
                                />
                                {/* Search Icon */}
                                <div className="absolute left-0 rounded-r-full md:px-1 lg:px-2 py-2">
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
                        <div className="flex-grow h-[calc(100%-7rem)] mt-4 pr-2 overflow-y-scroll app-scrollbar">
                            <PostCard
                                imageUrl={"/assets/images/post-image.png"}
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                imageUrl={"/assets/images/post-image.png"}
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                imageUrl={"/assets/images/post-image.png"}
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                imageUrl={"/assets/images/post-image.png"}
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                            <PostCard
                                name={"Lorem Ipsum"}
                                desc={
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is"
                                }
                                sector={1}
                                likes={"2k"}
                                views={"2k"}
                                comments={"2k"}
                                timestamp={"2 mins ago"}
                            />
                        </div>
                    </div>
                </div>
                {/* Market Stories */}
                <div className="flex flex-col">
                    <h1 className="home-header py-4">Market Stories</h1>
                    <div className="h-full mt-4 overflow-y-scroll hide-scrollbar">
                        <div className="flex flex-wrap gap-y-6 gap-x-1 lg:gap-x-10 mb-6">
                            {data?.map((story, i) => {
                                return (
                                    <div className="relative w-72 h-48 aspect-video rounded-lg overflow-hidden bg-red-200">
                                        <Image
                                            src={story.image}
                                            alt=""
                                            fill={true}
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
                </div>
            </div>
        </div>
    );
};

export default HomePage;
