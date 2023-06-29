import Image from "next/image";

const data = [
    "/assets/images/featured_companies/anant_raj.png",
    "/assets/images/featured_companies/capriglobal.png",
    "/assets/images/featured_companies/hira.png",
    "/assets/images/featured_companies/data_patterns.png",
    "/assets/images/featured_companies/deep_industries.png",
    "/assets/images/featured_companies/fino_payments_bank.png",
    "/assets/images/featured_companies/ganesh_housing_coorporation.png",
    "/assets/images/featured_companies/gayatri_projects.png",
    "/assets/images/featured_companies/infibeans_avenues.png",
];

const FeaturedCompanies = () => {
    return (
        <div>
            <div className="home-header px-6 py-2">Featured Companies</div>
            <div className="relative p-2 h-16 flex-center bg-sky-100 flex gap-6">
                {data.map((company_logo_url) => {
                    return (
                        <Image
                            src={company_logo_url}
                            alt=""
                            width={130}
                            height={40}
                            className="max-h-10 min-h-[2.5rem] max-w-[10rem]"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturedCompanies;
