import Image from "next/image";

const SidebarTile = ({ title, iconUrl, selected }) => {
    return (
        <div
            className={`flex items-center p-2 gap-2 cursor-pointer hover:bg-app-dark-blue ${
                selected ? "bg-app-dark-blue" : ""
            }`}
        >
            {iconUrl ? (
                <Image src={iconUrl} alt="" width={20} height={20} />
            ) : (
                <div className="w-5 h-5"></div>
            )}
            <span className={`${iconUrl && "-mt-1"}`}>{title}</span>
        </div>
    );
};

export default SidebarTile;
