import FeaturedCompanies from "@components/FeaturedCompanies";
import Sidebar from "@components/Sidebar";
import HomePage from "@components/HomePage";

export default function Home() {
    return (
        <div className="flex flex-col max-h-[calc(100vh-4.75rem)]  h-[calc(100vh-4.75rem)] overflow-hidden bg-[#f5f5f4]">
            <FeaturedCompanies />
            <div className="relative flex overflow-y-scroll hide-scrollbar">
                <Sidebar />
                <HomePage />
            </div>
        </div>
    );
}
