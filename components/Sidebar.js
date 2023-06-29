"use client";

import Image from "next/image";
import SidebarTile from "./SidebarTile";
import { useState } from "react";

const Sidebar = ({ classname }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`${classname} relative w-64 bg-app-light-blue text-white ${
                isOpen ? "w-64" : "w-0"
            }`}
        >
            {/* Sidebar Toggle Button */}
            <div
                onClick={() => setIsOpen((prev) => !prev)}
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
            <div className={`${isOpen ? "" : "hidden"}`}>
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
