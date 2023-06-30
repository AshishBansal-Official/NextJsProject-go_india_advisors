import Image from "next/image";

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

const MarketStories = () => {
    return (
        <div className="h-full mt-6 md:mt-4 overflow-y-scroll hide-scrollbar">
            <div className="flex items-center md:items-start flex-col md:flex-row md:flex-wrap gap-y-6 gap-x-1 lg:gap-x-10 mb-6">
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
    );
};

export default MarketStories;
