export const GET = async (request) => {
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

    return new Response(JSON.stringify(data), { status: 200 });
};
