import { useTranslations, useLocale } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";



const Footer = () => {

    const t = useTranslations("Footer");

    const locale = useLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <footer className="bg-footerColor" dir={direction}>
            <div className="mx-auto  space-y-8 px-6 md:px-12.5 lg:px-17.5 xl:px-25 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <Link href={"/"}>
                            <img src="/assets/footerLogo.png" alt="FEMEX-logo" className="w-31.5 h-25" />
                        </Link>

                        <p className="mt-4 max-w-xs text-neutralWhite highLineHeight">
                            {t("footer.desc")}
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link href={"/"} className="">
                                    <FaFacebook className="w-6 h-6 text-primarySoft hover:text-primaryMain duration-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <FaInstagram className="w-6 h-6 text-primarySoft hover:text-primaryMain duration-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <FaXTwitter className="w-6 h-6 text-primarySoft hover:text-primaryMain duration-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <TbBrandLinkedinFilled className="w-6 h-6 text-primarySoft hover:text-primaryMain duration-500" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit">
                        <p className="text-neutralWhite mb-4 smallLineHeight">
                            {t("footer.linkOne")}
                        </p>
                        <ul className="space-y-4">
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default highLineHeight w-fit">
                                <Link href="/">
                                    {t("footer.home")}
                                </Link>
                            </li>
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default highLineHeight w-fit">
                                <Link href="/about">
                                    {t("footer.whoWeAre")}
                                </Link>
                            </li>
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default highLineHeight w-fit">
                                <Link href="/contact">
                                    {t("footer.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit">
                        <p className="text-neutralWhite mb-4 smallLineHeight">
                            {t("footer.linkTwo")}
                        </p>
                        <ul className="space-y-4">
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default w-fit">
                                <Link href="/parcelDelivery">
                                    {t("footer.parcelDelivery")}
                                </Link>
                            </li>
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default w-fit">
                                <Link href="/dryRefrigeratedTransport">
                                    {t("footer.dryAndRefrigeratedTransport")}
                                </Link>
                            </li>
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default w-fit">
                                <Link href="/storageService">
                                    {t("footer.storageServices")}
                                </Link>
                            </li>
                            <li className="text-neutralLightGray hover:text-primaryMain duration-500 cursor-default w-fit">
                                <Link href="/customsClearance">
                                    {t("footer.customsClearance")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit">
                        <p className="text-neutralWhite mb-4 smallLineHeight">
                            {t("footer.linkThree")}
                        </p>
                        <ul className="space-y-4">
                            <li className="text-neutralLightGray flex items-center gap-2">
                                <img src="/assets/locationIcon.png" alt="locationIcon" />
                                <span className="hover:text-primaryMain duration-500 cursor-default">
                                    {t("footer.location")}
                                </span>
                            </li>
                            <li className="text-neutralLightGray flex items-center gap-2">
                                <img src="/assets/emailIcon.png" alt="emailIcon" />
                                <span className="hover:text-primaryMain duration-500 cursor-default">
                                    {t("footer.email")}
                                </span>
                            </li>
                            <li className="text-neutralLightGray flex items-center gap-2">
                                <img src="/assets/phoneIcon.png" alt="phoneIcon" />
                                {
                                    isArabic ?
                                        (
                                            <span className="hover:text-primaryMain duration-500 cursor-default">
                                                598889936 (966+)
                                            </span>
                                        )
                                        :
                                        (
                                            <span className="hover:text-primaryMain duration-500 cursor-default">
                                                (+966) 598889936
                                            </span>
                                        )
                                }
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t-2 border-primaryMain">
                    <p className="text-center text-neutralLightGray mt-9 highLineHeight">

                        <span>جميع الحقوق محفوظة</span>
                        {" "}
                        <span>FEMEX Logistics Company © 2025</span>

                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;