import Image from "next/image";

const Nav = () => {
    return (
        <nav className="flex-between w-full py-2 px-4">
            {/* Logo */}
            <div className="cursor-pointer">
                <Image
                    src="/assets/images/logo.webp"
                    alt="GIA"
                    width={70}
                    height={40}
                    className="max-h-10 min-w-[70px]"
                />
            </div>
            {/* Search */}
            <div className="relative flex-grow flex-center rounded-md mx-4 md:ml-12 md:mr-40 ">
                <input className="rounded-md h-10 pl-4 pr-10 text-sm bg-search-bg font-normal focus:outline-none w-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)]" />
                {/* Search Icon */}
                <div className="absolute right-0 rounded-r-md p-2">
                    <Image
                        src="/assets/icons/search-icon.svg"
                        alt="search"
                        width={25}
                        height={25}
                        className="cursor-pointer min-w-[25px]"
                    />
                </div>
            </div>
            {/* End */}
            <div className="flex gap-2 sm:gap-4">
                <div className="flex-center text-xs font-semibold cursor-pointer whitespace-nowrap">
                    Contact Us
                </div>
                <div className="outline_btn">SIGN UP</div>
                <div className="outline_btn">SIGN IN</div>
            </div>
        </nav>
    );
};

export default Nav;
