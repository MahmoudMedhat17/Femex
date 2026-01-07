import { Hero, ContactUs, CommonQuestions } from "@/app/[locale]/contact/_components/index";

export default function page() {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <ContactUs />
                <CommonQuestions />
            </div>
        </>
    )
};