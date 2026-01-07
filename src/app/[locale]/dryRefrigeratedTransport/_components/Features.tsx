import { getTranslations, getLocale } from 'next-intl/server';
import FeaturesSection from '@/app/[locale]/dryRefrigeratedTransport/_components/FeaturesSection';

const Features = async () => {


  const t = await getTranslations("DryRefrigeratedTransport");

  const locale = await getLocale();

  const isArabic = locale === "ar";

  const direction = isArabic ? "rtl" : "ltr";

  return (
    <section dir={direction} className='py-8 md:py-16'>
      <FeaturesSection img='/assets/featuresImg.png' translation='DryRefrigeratedTransport' translationKey='dryRefrigeratedTransportFeatures' Ttitle={t.rich("dryRefrigeratedTransportFeatures.title", { span: (chunks) => <span className='text-primaryMain'>{chunks}</span> })} />
    </section>
  )
}

export default Features;