import { getTranslations, getLocale } from "next-intl/server";
import HowItWorksCard from "@/app/common/HowItWorks";

const HowItWorks = async () => {

    const t = await getTranslations("ParcelDelivery");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className="py-8 md:py-16">
            <div className='flex flex-col justify-center items-center gap-2.5'>
                <h2 className="text-[40px] font-semibold midLineHeight">{t("howItWorks.title")}</h2>
                <p className="text-[18px] text-neutralDarkGray highLineHeight">{t("howItWorks.desc")}</p>
            </div>
            <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                <HowItWorksCard Tnumber={t("howItWorks.Cards.cardOne.number")} Theading={t("howItWorks.Cards.cardOne.heading")} Tdesc={t("howItWorks.Cards.cardOne.desc")} />
                <HowItWorksCard Tnumber={t("howItWorks.Cards.cardTwo.number")} Theading={t("howItWorks.Cards.cardTwo.heading")} Tdesc={t("howItWorks.Cards.cardTwo.desc")} />
                <HowItWorksCard Tnumber={t("howItWorks.Cards.cardThree.number")} Theading={t("howItWorks.Cards.cardThree.heading")} Tdesc={t("howItWorks.Cards.cardThree.desc")} />
                <HowItWorksCard Tnumber={t("howItWorks.Cards.cardFour.number")} Theading={t("howItWorks.Cards.cardFour.heading")} Tdesc={t("howItWorks.Cards.cardFour.desc")} />
            </div>
        </section>
    )
}

export default HowItWorks