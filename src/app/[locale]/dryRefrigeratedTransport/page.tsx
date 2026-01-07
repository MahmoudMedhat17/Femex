import { CommonQuestions, Description, Features, Hero, HowItWorks, Ready } from "@/app/[locale]/dryRefrigeratedTransport/_components/index";

export default function page() {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
                <HowItWorks />
                <CommonQuestions />
            </div>
            <Ready />
        </>
    )
};