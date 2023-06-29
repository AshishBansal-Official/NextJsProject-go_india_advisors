import Banner from "@components/Banner";
import FeaturedCompanies from "@components/FeaturedCompanies";
import Sidebar from "@components/Sidebar";
import HomePage from "@components/HomePage";

export default function Home() {
    return (
        <div className="flex-grow flex flex-col">
            <Banner />
            <FeaturedCompanies />
            <div className="flex-grow flex">
                <Sidebar classname="md:block hidden" />
                <HomePage />
            </div>
        </div>
    );
}
