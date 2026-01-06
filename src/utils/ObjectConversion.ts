import { useTranslations } from "next-intl";

type TFunction = ReturnType<typeof useTranslations>;

const ObjectConversion = (t:TFunction, key: string) => {
    const obj = t.raw(key);
    
    if (obj && typeof obj === "object") {
        return Object.values(obj);
    }

    return [];
};


export default ObjectConversion;