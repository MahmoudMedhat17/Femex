import { getTranslations, getLocale, } from "next-intl/server";
import Link from 'next/link';


export default async function About() {

    const t = await getTranslations("Home");

    const locale = await getLocale();


    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section className="py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-[121px]" dir={direction}>
            <div className="flex flex-col space-y-4">
                <p className="bg-primarySoft text-primaryDark text-lg font-semibold py-2 px-4 inline-block smallLineHeight rounded-lg w-fit">
                    {t("about.subHeading")}
                </p>
                <h2 className="font-semibold text-[40px] lg:max-w-[400px] midLineHeight">
                    {t.rich("about.title", { span: (chunks) => <span className="text-primaryMain">{chunks}</span> })}
                </h2>
                <p className="lg:max-w-[400px] text-neutralDarkGray highLineHeight">
                    {t("about.desc")}
                </p>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg font-semibold smallLineHeight w-fit">
                    <Link href="/about">
                        {t("about.buttons.button")}
                    </Link>
                </button>
            </div>
            <img src="assets/aboutImage.png" className="lg:w-[50%]" />

        </section>
    )
}

