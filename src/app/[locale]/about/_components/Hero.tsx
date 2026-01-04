import { getTranslations, getLocale } from "next-intl/server";



const Hero = async () => {


    const t = await getTranslations("About");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} className="relative h-[400px] w-full overflow-hidden">

            <img
                src="/assets/aboutHero.png"
                className="absolute inset-0 w-full h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-black/70 h-[410px]"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <div className='translate-y-8'>
                    <h1 className="text-[40px] md:text-[56px] font-bold smallLineHeight md:midLineHeight mb-2">
                        {t("aboutHero.title")}
                    </h1>
                    <p className="text-[16px] md:text-[18px] highLineHeight text-neutralSoftGray">
                        {t("aboutHero.desc")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;