import Image from "next/image";
import React from "react";

const PostCard = ({
    iconUrl,
    name,
    desc,
    sector,
    likes,
    views,
    comments,
    timestamp,
    imageUrl,
}) => {
    return (
        <div className="flex flex-col my-4 bg-white shadow-[2px_4px_3px_rgba(0,0,0,0.38)] rounded-lg px-4 py-2 gap-2">
            {/* Image */}
            {imageUrl && (
                <div className="text-xs text-blue-500 font-semibold whitespace-nowrap text-end">
                    {timestamp}
                </div>
            )}
            {imageUrl && (
                <div className="flex-center">
                    <Image
                        src={imageUrl}
                        alt="post"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="max-h-40 h-40 w-4/5 object-fill"
                    />
                </div>
            )}
            {/* Body */}
            <div className="flex">
                {/* User Icon */}
                <div>
                    <Image
                        src={iconUrl ?? "/assets/icons/user-icon.png"}
                        alt="user"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="cursor-pointer min-w-[40px]"
                    />
                </div>
                {/* Body */}
                <div className="flex flex-col ml-2 mt-2 gap-2">
                    <div className="flex font-semibold gap-4">
                        <div>{name}</div>
                        <div
                            className={`sector-button ${
                                sector == 1
                                    ? "bg-rose-700"
                                    : sector == 2
                                    ? "bg-blue-800"
                                    : "bg-yellow-500"
                            }`}
                        >
                            Sector {sector}
                        </div>
                    </div>
                    <div className="text-sm">{desc}</div>
                </div>
                {/* Timestamp */}
                {!imageUrl && (
                    <div className="text-xs text-blue-500 font-semibold whitespace-nowrap">
                        {timestamp}
                    </div>
                )}
            </div>
            {/* Like View Comment Share */}
            <div className="flex justify-evenly">
                <div className="flex gap-1 text-sm font-semibold">
                    <Image
                        src={iconUrl ?? "/assets/icons/heart-icon.svg"}
                        alt="likes"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="cursor-pointer min-w-[20px]"
                    />
                    <span>{likes}</span>
                </div>
                <div className="flex gap-1 text-sm font-semibold">
                    <Image
                        src={iconUrl ?? "/assets/icons/view-icon.svg"}
                        alt="views"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="cursor-pointer min-w-[20px]"
                    />
                    <span>{views}</span>
                </div>
                <div className="flex gap-1 text-sm font-semibold">
                    <Image
                        src={iconUrl ?? "/assets/icons/comment-icon.svg"}
                        alt="comments"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="cursor-pointer min-w-[20px]"
                    />
                    <span>
                        {comments}{" "}
                        <span className="lg:visible hidden">Comments</span>
                    </span>
                </div>
                <div className="flex gap-1 text-sm font-semibold">
                    <Image
                        src={iconUrl ?? "/assets/icons/share-icon.svg"}
                        alt="share"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="cursor-pointer min-w-[20px]"
                    />
                    <span>Share</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
