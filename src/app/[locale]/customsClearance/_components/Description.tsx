import { getTranslations, getLocale } from "next-intl/server";
import DescSection from "@/app/common/DescSection";


const Description = async () => {

    const t = await getTranslations("CustomsClearance");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='py-8 md:py-16'>
            <DescSection img="/assets/customsClearanceAbout.png" Ttitle={t.rich("customsClearanceDesc.title", { span: (chunks) => <span className="text-primaryMain">{chunks}</span> })} Tdesc={t("customsClearanceDesc.desc")} />
        </section>
    )
}

export default Description;