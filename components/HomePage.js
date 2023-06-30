import Image from "next/image";
import React from "react";

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
        <div className="h-full w-full">
            <div className="flex h-full">
                {/* Discussion Fourm */}
                <div className="2xl:min-w-[50rem] xl:min-w-[40rem] lg:min-w-[30rem] md:min-w-[25rem] min-w-[20rem] h-full px-6  flex flex-col">
                    <h1 className="home-header py-4">Discussion Fourm</h1>
                </div>
                <div className="flex flex-col   ">
                    <h1 className="home-header py-4">Market Stories</h1>
                    <div className="h-full overflow-y-scroll hide-scrollbar">
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
