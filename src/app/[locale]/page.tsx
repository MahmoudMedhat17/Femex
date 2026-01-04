import { About, Hero, Ready, Services, Whyus } from "@/app/[locale]/home/index";


const page = () => {
  return (
    <>
      <Hero />
      <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
        <About />
        <Services />
        <Whyus />
      </div>
      <Ready />
    </>
  )
}

export default page;