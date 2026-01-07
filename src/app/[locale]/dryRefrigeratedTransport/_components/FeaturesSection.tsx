import { getTranslations } from "next-intl/server";
import FeaturesComp from "@/app/common/FeaturesComp";
import { ReactNode } from "react";

interface IFeatures {
  img: string;
  Ttitle: ReactNode;
  translation: string;
  translationKey: string;
}


const FeaturesSection = async ({ img, Ttitle, translation, translationKey }: IFeatures) => {

  const t = await getTranslations(translation);


  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-[50px] md:gap-[121px]">
      <img src={img} className="w-full lg:w-1/2" />
      <div>
        <h2 className="text-[32px] md:text-[40px] font-semibold midLineHeight mb-8">
          {Ttitle}
        </h2>
        <div className="space-y-4">
          <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t(`${`${translationKey}.desc.descOne`}`)} />
          <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t(`${`${translationKey}.desc.descTwo`}`)} />
          <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t(`${`${translationKey}.desc.descThree`}`)} />
          <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t(`${`${translationKey}.desc.descFour`}`)} />
        </div>
      </div>

    </section>
  )
}

export default FeaturesSection;