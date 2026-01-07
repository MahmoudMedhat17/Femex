import { getTranslations, getLocale } from "next-intl/server";
import DescSection from "@/app/common/DescSection";


const Description = async () => {

    const t = await getTranslations("StorageService");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='py-8 md:py-16'>
            <DescSection img="/assets/storageServicesDesc.png" Ttitle={t.rich("storageServicesDesc.title", { span: (chunks) => <span className="text-primaryMain">{chunks}</span> })} Tdesc={t("storageServicesDesc.desc")} />
        </section>
    )
}

export default Description;