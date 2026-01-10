import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';


interface IReadyComp {
    translation: string;
    translationKey: string;
    bgImage: string;
};


const ReadyComp = async ({ translation, translationKey, bgImage }: IReadyComp) => {

    const t = await getTranslations(translation);

    const locale = await getLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} style={{ "--bgImage": `url(${bgImage})` } as React.CSSProperties} className="my-16 bg-ready-section h-[500px] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="max-w-xl md:max-w-2xl mx-auto text-center text-white px-6 md:px-0">
                <h2 className="mb-4 text-[40px] font-semibold midLineHeight">
                    {t(`${translationKey}.title`)}
                </h2>
                <p className="mb-7 text-lg highLineHeight">
                    {t(`${translationKey}.desc`)}
                </p>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg smallLineHeight">
                    <Link href="/contact">
                        {t(`${translationKey}.button`)}
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default ReadyComp;