"use client";

import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import ScrollToTop from "@/utils/ScrollToTop";
// import NavlinkStyle from "@/utils/NavlinkStyle";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [mobServices, setMobServices] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    const t = useTranslations("Nav");

    // Here with this useLocale we get the current lang.
    const locale = useLocale();

    const handleLanguage = () => {
        // Return if the locale is = to arabic then switch lang. to english and vice versa.
        const localeState = locale === "ar" ? "en" : "ar";

        // Triggers Next to re render the page to show the page with a diff lang.
        router.replace(pathName, { locale: localeState });
    };

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    const handleLinkCloseClick = () => {
        setOpenMenu((prev) => !prev);
    };


    const getParamsLink = (href: string) => {
        const isActive = pathName === href;
        return isActive;
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-99 w-full" dir={direction}>
            <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-12.5 lg:px-17.5 xl:px-25">

                <div className="flex items-center lg:gap-12.5 xl:gap-22">
                    <Link onClick={ScrollToTop} scroll={true} href="/">
                        <img src="/assets/logo.png" alt="logo" className="w-18 lg:w-24" />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10 w-full relative">
                        <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain duration-500 highLineHeight">
                            <Link href="/" className={getParamsLink("/") ? "text-primaryMain" : ""}>
                                {t("navbar.home")}
                            </Link>
                        </span>
                        <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain duration-500 highLineHeight">
                            <Link href="/about" className={getParamsLink("/about") ? "text-primaryMain" : ""}>
                                {t("navbar.about")}
                            </Link>
                        </span>
                        <div className="flex items-center justify-center gap-1.5 h-16 group">
                            <div className="absolute top-16 bg-neutralWhite w-1/2 space-y-4 py-4 hidden group-hover:block shadow-lg">
                                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                                    <Link href="/parcelDelivery" className={getParamsLink("/parcelDelivery") ? "text-primaryMain" : ""}>
                                        {t("navbar.dropDownMenu.parcelDelivery")}
                                    </Link>
                                </p>
                                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                                    <Link href="/dryRefrigeratedTransport" className={getParamsLink("/dryRefrigeratedTransport") ? "text-primaryMain" : ""}>
                                        {t("navbar.dropDownMenu.dryRefrigeratedTransport")}
                                    </Link>
                                </p>
                                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                                    <Link href="/storageService" className={getParamsLink("/storageService") ? "text-primaryMain" : ""}>
                                        {t("navbar.dropDownMenu.storageService")}
                                    </Link>
                                </p>
                                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                                    <Link href="/customsClearance" className={getParamsLink("/customsClearance") ? "text-primaryMain" : ""}>
                                        {t("navbar.dropDownMenu.customsClearance")}
                                    </Link>
                                </p>
                            </div>
                            {
                                !isArabic ?
                                    (
                                        <div className="cursor-pointer flex items-center text-neutralLightGray hover:text-primaryMain duration-500">
                                            <span className="highLineHeight">{t("navbar.services")}</span>
                                            <MdOutlineKeyboardArrowDown />
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="cursor-pointer flex items-center text-neutralLightGray hover:text-primaryMain duration-500">
                                            <span className="highLineHeight">{t("navbar.services")}</span>
                                            <MdOutlineKeyboardArrowDown />
                                        </div>
                                    )
                            }
                        </div>
                        <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain highLineHeight">
                            <Link href="/contact" className={getParamsLink("/contact") ? "text-primaryMain" : ""}>
                                {t("navbar.contact")}
                            </Link>
                        </span>
                    </nav>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <button className="cursor-pointer bg-primaryMain text-white hover:bg-primaryDark duration-500 px-4 py-1.5 rounded-lg smallLineHeight">
                        <Link href="/contact">
                            {t("navbar.order")}
                        </Link>
                    </button>

                    <div onClick={handleLanguage} className="flex items-center gap-1 cursor-pointer">
                        <span className="highLineHeight">{t("navbar.langSwitch")}</span>
                        <img src="/assets/translateIcon.png" alt="translate" />
                    </div>
                </div>

                <button
                    className="block lg:hidden focus:outline-none"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {openMenu ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>



            {/* Mobile view */}
            {openMenu && (
                <div className={`lg:hidden px-6 py-4 space-y-4 ${isArabic ? "text-left" : "text-right"}`}>
                    <span className="w-fit block cursor-pointer hover:text-primaryMain text-neutralLightGray duration-500 highLineHeight">
                        <Link href="/" className={getParamsLink("/") ? "text-primaryMain" : ""} onClick={handleLinkCloseClick}>
                            {t("navbar.home")}
                        </Link>
                    </span>
                    <span className="w-fit block cursor-pointer hover:text-primaryMain text-neutralLightGray duration-500 highLineHeight">
                        <Link href="/about" className={getParamsLink("/about") ? "text-primaryMain" : ""} onClick={handleLinkCloseClick}>
                            {t("navbar.about")}
                        </Link>
                    </span>

                    <span className=" block cursor-pointer hover:text-primaryMain duration-500 highLineHeight" onClick={() => setMobServices(!mobServices)}>
                        {
                            !isArabic ?
                                (
                                    <div className="cursor-pointer flex items-center text-neutralLightGray hover:text-primaryMain duration-500">
                                        <span className="highLineHeight">{t("navbar.services")}</span>
                                        <MdOutlineKeyboardArrowDown />
                                    </div>
                                )
                                :
                                (
                                    <div className="cursor-pointer flex items-center text-neutralLightGray hover:text-primaryMain duration-500">
                                        <span className="highLineHeight">{t("navbar.services")}</span>
                                        <MdOutlineKeyboardArrowDown />
                                    </div>
                                )
                        }
                        {
                            mobServices && (
                                <div onClick={handleLinkCloseClick} className={`w-full block space-y-4 py-4 text-start`}>
                                    <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                                        <Link href="/parcelDelivery" className={getParamsLink("/parcelDelivery") ? "text-primaryMain" : ""}>
                                            {t("navbar.dropDownMenu.parcelDelivery")}
                                        </Link>
                                    </p>
                                    <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                                        <Link href="/dryRefrigeratedTransport" className={getParamsLink("/dryRefrigeratedTransport") ? "text-primaryMain" : ""}>
                                            {t("navbar.dropDownMenu.dryRefrigeratedTransport")}
                                        </Link>
                                    </p>
                                    <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                                        <Link href="/storageService" className={getParamsLink("/storageService") ? "text-primaryMain" : ""}>
                                            {t("navbar.dropDownMenu.storageService")}
                                        </Link>
                                    </p>
                                    <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                                        <Link href="/customsClearance" className={getParamsLink("/customsClearance") ? "text-primaryMain" : ""}>
                                            {t("navbar.dropDownMenu.customsClearance")}
                                        </Link>
                                    </p>
                                </div>
                            )
                        }
                    </span>
                    <span className="w-fit block cursor-pointer hover:text-primaryMain text-neutralLightGray duration-500 highLineHeight">
                        <Link href="/contact" className={getParamsLink("/contact") ? "text-primaryMain" : ""} onClick={handleLinkCloseClick}>
                            {t("navbar.contact")}
                        </Link>
                    </span>

                    <Link href="/contact">
                        <button className="bg-primaryMain text-white px-4 py-2 rounded-lg w-full mt-4 smallLineHeight cursor-pointer">
                            {t("navbar.order")}
                        </button>
                    </Link>

                    <div
                        className="w-fit flex items-center gap-2 cursor-pointer mt-2"
                        onClick={handleLanguage}
                    >
                        <img src="/assets/translateIcon.png" alt="translate" className="w-5" />
                        <span className="highLineHeight">{t("navbar.langSwitch")}</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
