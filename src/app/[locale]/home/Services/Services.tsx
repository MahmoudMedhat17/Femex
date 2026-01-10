import { getTranslations, getLocale } from "next-intl/server";
import { servicesData } from "@/data/ServicesData";
import Link from "next/link";

export default async function Services() {

    const t = await getTranslations("Home");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";



    // Here we apply the translation of each card of the servicesData before passing this variable as a props to the client component.
    let reversedServicesData = servicesData.map((service) => (
        { ...service, }
    ));

    // Here this is a function that checks the lang. first, if it's "AR" then switch the position of the cards from right to left and vice versa.
    if (isArabic) {
        // Here we pass the servicesData to the reverseDat var.
        const reversedData = [...servicesData];

        // Then loop around the reversedData var. and check if the index is = 0 and less than the length of the reversedData and jump 2 indexes with i+=2;
        for (let i = 0; i < reversedData.length; i += 2) {
            // Here we check if the 2nd index like "0,1" we target the '1" is still less than the data array length then switch between "0,1" to "1,0" and "2,3" to "3,2".
            if (i + 1 < reversedData.length) {
                [reversedData[i], reversedData[i + 1]] = [reversedData[i + 1], reversedData[i]];
            }
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        reversedServicesData = reversedData;
    }



    return (
        <section id="services" dir={direction} className="py-8 md:py-16">
            <div className="flex flex-col justify-center items-center space-y-4">
                <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg text-lg w-fit font-semibold smallLineHeight">
                    {t("services.subHeading")}
                </p>
                <h2 className="text-[40px] font-semibold text-center smallLineHeight">
                    {t.rich("services.title", { span: (chunks) => <span className="text-primaryMain">{chunks}</span> })}
                </h2>
                <p className="font-normal text-lg text-neutralLightGray max-w-[644px] text-center highLineHeight">
                    {t("services.desc")}
                </p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-8 md:px-[50px] lg:px-[109px] xl:px-[209px]">
                    {
                        reversedServicesData.map((data, index) => (
                            <div key={index} className="flex flex-col justify-between border border-neutralSoftGray p-4 rounded-2xl h-full">
                                <img src={t(data.img)} className="w-full" />
                                <div className="space-y-2 mt-6 mb-4">
                                    <h4 className={`text-xl font-semibold midLineHeight ${isArabic ? "text-right" : "text-left"}`}>{t(data.title)}</h4>
                                    <p className={`text-md font-normal text-neutralDarkGray highLineHeight ${isArabic ? "text-right" : "text-left"}`}>
                                        {t(data.desc)}
                                    </p>
                                </div>
                                <button className="w-full bg-primarySoft text-primaryDark border border-primaryMain hover:bg-primaryDark hover:text-white duration-500 rounded-lg px-4 py-3 cursor-pointer smallLineHeight">
                                    <Link href={data.route}>
                                        {t(data.btn)}
                                    </Link>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
