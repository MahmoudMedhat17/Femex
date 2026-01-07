const SuccessMessage = (message: { message: string }) => {
    return (
        <div className="flex items-start gap-2 w-full lg:w-[404px]">
            <img src="/assets/primeVerified.png" className="w-8 h-8" />
            <p className="text-[16px] md:text-[18px] text-neutralBlack highLineHeight">
                {message.message}
            </p>
        </div>
    )
};



export default SuccessMessage;