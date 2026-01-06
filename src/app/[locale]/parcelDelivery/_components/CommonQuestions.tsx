"use client"

import { useTranslations, useLocale } from 'next-intl';
import QuestionCards from '@/app/common/QuestionCards';
import ObjectConversion from '@/utils/ObjectConversion';
import useAccordian from '@/utils/useAccordian';


interface TQuestions {
    question: string;
    answer: string;
}

const CommonQuestions = () => {


    const t = useTranslations("ParcelDelivery");

    const locale = useLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    const questionArray = ObjectConversion(t, "commonQuestions.questions") as [];

    const { isOpen, onAccordianActive } = useAccordian();


    return (
        <section dir={direction} className="py-8 md:py-16">
            <div className="flex flex-col justify-center items-center gap-2.5">
                <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg text-lg w-fit font-semibold smallLineHeight">
                    {t("commonQuestions.desc")}
                </p>
                <h2 className="text-[40px] font-semibold text-center midLineHeight">
                    {t("commonQuestions.title")}
                </h2>
            </div>
            <div className='pt-12 space-y-4 w-full md:w-[700px] lg:w-[821px] mx-auto'>
                {
                    questionArray.map((ques: TQuestions, index) => (
                        <QuestionCards key={index} question={ques.question} answer={ques.answer} isOpen={isOpen(index)} onAccordianActive={() => onAccordianActive(index)} />
                    ))
                }
            </div>
        </section>
    )
}

export default CommonQuestions;