"use client";

import Image from "next/image";
import SidebarTile from "./SidebarTile";
import { useState } from "react";

const Sidebar = ({ classname }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div
            className={`${classname} fixed lg:relative min-h-[calc(100vh-4.8rem)] lg:min-h-[calc(100vh-11.75rem)] top-[4.75rem] lg:top-0 min-w-[13rem] lg:min-w-[16rem]  bg-app-light-blue text-white ${
                isSidebarOpen
                    ? "left-0 md:margin-l-0"
                    : "-left-[13rem] lg:left-0 lg:-ml-64"
            }`}
        >
            {/* Sidebar Toggle Button */}
            <div
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                className="absolute top-1/2 left-full -translate-y-1/2 bg-app-light-blue rounded-r-md cursor-pointer"
            >
                <div className="h-16 w-4 flex-center">
                    <Image
                        src="/assets/icons/sidebar/right_arrow.svg"
                        alt=""
                        width={28}
                        height={28}
                    />
                </div>
            </div>
            <div>
                {/* Header */}
                <div className="flex p-4 justify-between">
                    <div className="flex">
                        <Image
                            src="/assets/icons/sidebar/user.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                        <span className="ml-2">Hello, User</span>
                    </div>
                    <Image
                        src="/assets/icons/sidebar/notification.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
                <div className="h-0.5 mb-2 bg-white/10"></div>
                {/* Sidebar Sections */}
                <SidebarTile
                    title="Discussion Forum"
                    iconUrl="/assets/icons/sidebar/discussion_form.svg"
                />
                <SidebarTile
                    title="Market Stories"
                    iconUrl="/assets/icons/sidebar/market_stories.svg"
                />
                <SidebarTile title="Sentiment" />
                <SidebarTile title="Market" />
                <SidebarTile title="Sector" />
                <SidebarTile title="Watchlist" />
                <SidebarTile title="Events" />
                <SidebarTile title="News/Interview" />
            </div>
        </div>
    );
};

export default Sidebar;
