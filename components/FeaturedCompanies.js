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
    "/assets/images/featured_companies/laxmi_organic_industries.png",
    "/assets/images/featured_companies/meghmani_finechem_ltd.png",
    "/assets/images/featured_companies/nath_bio_genes.png",
    "/assets/images/featured_companies/the_great_eastern_shipping_company.png",
];

const FeaturedCompanies = () => {
    return (
        <div className="md:h-28">
            <h1 className="md:block hidden home-header px-6 py-2">
                Featured Companies
            </h1>
            <div className="w-full bg-blue-100 h-16">
                <div className="flex items-center px-2 md:px-4 md:gap-6 gap-2 w-full h-full overflow-x-scroll hide-scrollbar">
                    {data.map((company_logo_url) => {
                        return (
                            <div>
                                <Image
                                    src={company_logo_url}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="md:max-h-10 md:min-h-[2.5rem] md:min-w-[8rem] md:max-w-[10rem] h-14 w-14 min-h-[3.5rem] min-w-[3.5rem] object-scale-down bg-white border-2 md:border-0 border-rose-600 object-center md:rounded-none rounded-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCompanies;
