"use client";


import { useTranslations, useLocale } from 'next-intl';
import InputField from '@/utils/InputField';
import { useForm, type SubmitHandler } from "react-hook-form";
import { type ContactFormData, contactSchema } from '@/Schemas/ContactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import SuccessMessage from '@/utils/SuccessMsg';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";



const ContactUs = () => {

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onSubmit",
        reValidateMode: "onChange"
    });


    const onSubmitForm: SubmitHandler<ContactFormData> = async (data: ContactFormData) => {

        const { email, message, userName, phone, service } = data;

        const response = await fetch("/api/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email,
                userName,
                phone,
                message,
                service
            })
        })

        // If the response of the form is 200 then reset the form data.
        if (response.ok) {
            reset();
        }
    };

    const t = useTranslations("Contact");

    const locale = useLocale();

    const isArabic = locale === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    const notify = () => toast(<SuccessMessage message={t("contactUs.notify")} />, { icon: false, hideProgressBar: true });

    const handleSubmitForm = () => {
        if (!isValid) {
            return;
        }
        else {
            notify();
        }
    };


    return (
        <section dir={direction} className='py-8 md:py-16'>
            <div className='flex flex-col md:flex-row justify-between gap-12 md:gap-0h w-full'>
                <div className='w-full'>
                    <h2 className='text-[32px] md:text-[40px] text-neutralBlack font-semibold midLineHeight'>{t("contactUs.title")}</h2>
                    <p className='text-[18px] text-neutralDarkGray highLineHeight mb-10'>{t("contactUs.desc")}</p>

                    <form onSubmit={handleSubmit(onSubmitForm)} className='space-y-6'>
                        <InputField label={t("contactUs.formDetails.name.label")} error={errors?.userName?.message}>
                            <input type="text" placeholder={t("contactUs.formDetails.name.placeHolder")} {...register("userName")} className='px-4 py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight hover:border-neutralLightGray duration-300 shadow-sm focus:border-primaryMain focus:outline-none rounded-lg' />
                        </InputField>

                        <InputField label={t("contactUs.formDetails.email.label")} error={errors?.message?.message}>
                            <input type="text" placeholder={t("contactUs.formDetails.email.placeHolder")} {...register("email")} className='px-4 py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight hover:border-neutralLightGray duration-300 shadow-sm focus:border-primaryMain focus:outline-none rounded-lg' />
                        </InputField>

                        <InputField label={t("contactUs.formDetails.phone.label")} error={errors?.phone?.message} >
                            <input type="text" placeholder={t("contactUs.formDetails.phone.placeHolder")} {...register("phone")} className='px-4 py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight hover:border-neutralLightGray duration-300 shadow-sm focus:border-primaryMain focus:outline-none rounded-lg' />
                        </InputField>

                        <InputField label={t("contactUs.formDetails.message.label")} error={errors?.message?.message}>
                            <textarea rows={8} cols={20} placeholder={t("contactUs.formDetails.message.placeHolder")} {...register("message")} className='resize-none border border-neutralSoftGray placeholder:text-[16px] px-4 py-3 placeholder:text-neutralLightGray placeholder:highLineHeight hover:border-neutralLightGray duration-300 shadow-sm focus:border-primaryMain focus:outline-none rounded-lg' />
                        </InputField>

                        <InputField label={t("contactUs.formService.header")}>
                            <input type="text" placeholder={t("contactUs.formService.placeHolder")} {...register("service")} className='px-4 py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight hover:border-neutralLightGray duration-300 shadow-sm focus:border-primaryMain focus:outline-none rounded-lg' />
                        </InputField>

                        <button type='submit' disabled={isSubmitting} onClick={handleSubmitForm} className='text-[16px] font-semibold smallLineHeight w-full bg-primaryMain text-white hover:bg-primaryDark duration-300 rounded-lg p-5 cursor-pointer'>
                            {t("contactUs.submitButton")}
                        </button>
                        <ToastContainer
                            position={isArabic ? "top-right" : "top-left"}
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            style={{ maxWidth: "100%" }}
                        />
                    </form>
                </div>


                <div className='bg-primarySoft w-full rounded-lg'>
                    <img src="/assets/callUs.png" className='w-full rounded-tl-lg rounded-tr-lg' />
                    <div className='p-6'>
                        <h3 className='text-[32px] font-semibold midLineHeight mb-6'>
                            {t("contactUs.reachUs.header")}
                        </h3>
                        <div className='space-y-4 mb-6'>
                            <div className='flex items-center justify-between gap-2 w-fit'>
                                <img src="/assets/contactusEmail.png" />
                                <p className='text-[18px] highLineHeight text-neutralBlack'>{t("contactUs.reachUs.socialMedia.email")}</p>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-fit'>
                                <img src="/assets/contactusPhone.png" />
                                <p className='text-[18px] highLineHeight text-neutralBlack'>{t("contactUs.reachUs.socialMedia.phone")}</p>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-fit'>
                                <img src="/assets/contactusLocation.png" />
                                <p className='text-[18px] highLineHeight text-neutralBlack'>{t("contactUs.reachUs.socialMedia.location")}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 py-6 border-t border-t-primaryDark'>
                            <FaFacebook className='w-6 h-6 hover:text-primaryMain duration-500' />
                            <FaXTwitter className='w-6 h-6 hover:text-primaryMain duration-500' />
                            <FaInstagram className='w-6 h-6 hover:text-primaryMain duration-500' />
                            <TbBrandLinkedinFilled className='w-6 h-6 hover:text-primaryMain duration-500' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;