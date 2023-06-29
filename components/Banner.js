const data = [
    {
        name: "HDFC BANK",
        value: "1658.60",
        percentChange: "1.06%",
    },
    {
        name: "ICICI BANK",
        value: "936.10",
        percentChange: "0.14%",
    },
    {
        name: "KOTAK MAHINDRA BANK",
        value: "1844.70",
        percentChange: "-0.22%",
    },
    {
        name: "BANK OF BARODA",
        value: "190.95",
        percentChange: "-0.50%",
    },
    {
        name: "INDUSIND BANK",
        value: "1315.95",
        percentChange: "1.38%",
    },
    {
        name: "IDBI BANK",
        value: "53.60",
        percentChange: "0.00%",
    },
    {
        name: "AU SMALL FIN BANK",
        value: "749.80",
        percentChange: "-0.27%",
    },
    {
        name: "AXIS BANK",
        value: "973.25",
        percentChange: "0.51%",
    },
    {
        name: "PUNJAB AND SIND BANK",
        value: "29.60",
        percentChange: "1.18%",
    },
    {
        name: "RBL BANK",
        value: "174.20",
        percentChange: "1.03%",
    },
];

const Banner = () => {
    return (
        <div className="relative w-full bg-black h-5 text-white text-xs overflow-x-scroll hide-scrollbar">
            <div className="flex h-full">
                <div className=" flex-center bg-black gap-4 h-full animate-marquee1">
                    {data?.map((bank) => {
                        return (
                            <div className="flex-center gap-4 whitespace-nowrap">
                                <span>{bank.name}</span>
                                <span>
                                    {Intl.NumberFormat("en-IN").format(
                                        bank.value
                                    )}
                                </span>
                                <span
                                    className={`${
                                        parseFloat(
                                            bank.percentChange.replace("%", "")
                                        ) >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {bank.percentChange.replace("%", "")}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className=" flex-center opacity-0 bg-black gap-4 h-full animate-marquee2">
                    {data?.map((bank) => {
                        return (
                            <div className="flex-center gap-4 whitespace-nowrap">
                                <span>{bank.name}</span>
                                <span>
                                    {Intl.NumberFormat("en-IN").format(
                                        bank.value
                                    )}
                                </span>
                                <span
                                    className={`${
                                        parseFloat(
                                            bank.percentChange.replace("%", "")
                                        ) >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {bank.percentChange.replace("%", "")}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Banner;
