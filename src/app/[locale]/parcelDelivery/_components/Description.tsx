import { getTranslations, getLocale } from "next-intl/server";
import DescSection from "@/app/common/DescSection";


const Description = async () => {

    const t = await getTranslations("ParcelDelivery");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='py-8 md:py-16'>
            <DescSection img="/assets/parcelDesc.png" Ttitle={t.rich("parcelDesc.title", { span: (chunks) => <span className="text-primaryMain">{chunks}</span> })} Tdesc={t("parcelDesc.desc")} />
        </section>
    )
}

export default Description;