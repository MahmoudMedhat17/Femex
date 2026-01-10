import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { aboutServicesData } from "@/data/AboutServicesData";

const Services = async () => {


    const t = await getTranslations("About");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "lft";


    return (
        <section dir={direction} className="py-8 md:py-16 flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-[60px] lg:gap-[120px]">
            <div className="w-full xl:w-1/3 md:h-[453px]">
                <img src="/assets/servicesTruck.png" className="rounded-2xl w-full md:h-[453px] object-contain md:object-cover" />
            </div>
            <div className="flex flex-col lg:max-w-[612px]">
                <h2 className="text-[40px] font-semibold midLineHeight  mb-4">
                    {t.rich("services.title", { span: (chunks) => <span className="text-primaryMain">{chunks}</span> })}
                </h2>
                <p className="text-[18px] text-neutralDarkGray highLineHeight mb-4">
                    {t("services.desc")}
                </p>
                <div className="relative space-y-4 mb-6">
                    {
                        aboutServicesData.map((data, index) => (
                            <div key={index}>
                                <img src={data.img} className={`absolute ${isArabic ? "right-0" : "left-0"} right-0 w-6 h-6`} />
                                <p className={`text-[16px] font-medium smallLineHeight ${isArabic ? "mr-8" : "ml-8"}`}>
                                    {t(data.desc)}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg font-semibold smallLineHeight w-fit">
                    <Link href="/contact">
                        {t("services.button")}
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default Services;