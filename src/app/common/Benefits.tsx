"use client";


import { useLocale } from "next-intl";

interface IBenefits {
    Ttitle?: string;
    Tdesc: string;
};


const Benefits = ({ Ttitle, Tdesc }: IBenefits) => {

    const locale = useLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <div dir={direction} className="relative p-4 border border-neutralSoftGray hover:border-primaryLight hover:bg-primarySoft duration-500 rounded-2xl">
            <img src="/assets/primeVerified.png" className={`absolute ${isArabic ? "right-2" : "left-2"} right-2 w-8 h-8`} />
            <div className={`${isArabic ? "mr-10" : "ml-10"}`}>
                <h4 className="text-xl font-semibold midLineHeight">{Ttitle}</h4>
                <p className="text-lg text-neutralDarkGray highLineHeight">{Tdesc}</p>
            </div>
        </div>
    )
}

export default Benefits;
