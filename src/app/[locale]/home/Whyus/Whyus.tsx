import { getTranslations, getLocale } from "next-intl/server";
import Benefits from "@/app/common/Benefits";

const Whyus = async () => {

    const t = await getTranslations("Home");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    const cardOnePath = "whyus.benefitCards.cardOne";
    const cardTwoPath = "whyus.benefitCards.cardTwo";
    const cardThreePath = "whyus.benefitCards.cardThree";
    const cardFourPath = "whyus.benefitCards.cardFour";

    return (
        <section dir={direction} className={`py-8 md:py-16 flex flex-col ${isArabic ? "lg:flex-row-reverse" : "lg:flex-row-reverse"} justify-center items-start gap-12 lg:gap-4 pt-16 w-full`}>
            <div className="order-2 lg:order-1 w-full lg:w-[75%] space-y-4">
                <Benefits Ttitle={t(`${cardOnePath}.heading`)} Tdesc={t(`${cardOnePath}.desc`)} />
                <Benefits Ttitle={t(`${cardTwoPath}.heading`)} Tdesc={t(`${cardTwoPath}.desc`)} />
                <Benefits Ttitle={t(`${cardThreePath}.heading`)} Tdesc={t(`${cardThreePath}.desc`)} />
                <Benefits Ttitle={t(`${cardFourPath}.heading`)} Tdesc={t(`${cardFourPath}.desc`)} />
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-[25%] space-y-2.5">
                <p className="bg-primarySoft text-primaryDark text-lg font-semibold py-2 px-4 inline-block smallLineHeight rounded-lg">
                    {t("whyus.subHeading")}
                </p>
                <h2 className="text-[40px] font-semibold smallLineHeight">
                    {t("whyus.title")}
                </h2>
                <p className="text-lg text-neutralDarkGray highLineHeight">
                    {t("whyus.desc")}
                </p>
            </div>
        </section>
    )
}

export default Whyus;