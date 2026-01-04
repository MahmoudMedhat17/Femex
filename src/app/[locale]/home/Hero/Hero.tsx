import { getTranslations, getLocale } from "next-intl/server";
import HeroClient from "@/app/[locale]/home/Hero/HeroClient";


export default async function Hero() {

    const t = await getTranslations("Home");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <>
            <HeroClient
                direction={direction}
                title={t("hero.title")}
                desc={t("hero.desc")}
                buttonRight={t("hero.buttons.buttonRight")}
                buttonLeft={t("hero.buttons.buttonLeft")}
            />
        </>
    )
}