import { Hero, OurVision, Services, Whyus, Ready } from "@/app/[locale]/about/_components/index";

export default function Page() {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Services />
                <OurVision />
                <Whyus />
            </div>
            <Ready />
        </>
    )
}