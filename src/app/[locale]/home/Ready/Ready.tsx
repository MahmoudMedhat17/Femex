import { getTranslations, getLocale } from "next-intl/server";
import Link from 'next/link';


const Ready = async () => {

    const t = await getTranslations("Home");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} style={{ "--bgImage": 'url("/assets/readyPic.png' } as React.CSSProperties} className="my-16 bg-ready-section h-[500px] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="max-w-xl md:max-w-2xl mx-auto text-center text-white px-6 md:px-0">
                <h2 className="mb-4 text-[40px] font-semibold midLineHeight">
                    {t("ready.title")}
                </h2>
                <p className="mb-7 text-lg highLineHeight">
                    {t("ready.desc")}
                </p>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg smallLineHeight">
                    <Link href="/contact">
                        {t("ready.button")}
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default Ready;