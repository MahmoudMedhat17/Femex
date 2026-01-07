import { getTranslations, getLocale } from 'next-intl/server';
import FeaturesSection from '@/app/[locale]/customsClearance/_components/FeaturesSection';

const Features = async () => {


    const t = await getTranslations("CustomsClearance");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} className='py-8 md:py-16'>
            <FeaturesSection img='/assets/featuresImg.png' translation='CustomsClearance' translationKey='customsClearanceFeatures' Ttitle={t.rich("customsClearanceFeatures.title", { span: (chunks) => <span className='text-primaryMain'>{chunks}</span> })} />
        </section>
    )
}

export default Features;