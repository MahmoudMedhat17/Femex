import { getTranslations, getLocale } from 'next-intl/server';
import FeaturesSection from '@/app/[locale]/storageService/_components/FeaturesSection';

const Features = async () => {


    const t = await getTranslations("StorageService");

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} className='py-8 md:py-16'>
            <FeaturesSection img='/assets/featuresImg.png' translation='StorageService' translationKey='storageServicesFeatures' Ttitle={t.rich("storageServicesFeatures.title", { span: (chunks) => <span className='text-primaryMain'>{chunks}</span> })} />
        </section>
    )
}

export default Features;