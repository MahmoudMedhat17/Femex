
interface ICards {
    Tnumber: string;
    Theading: string;
    Tdesc: string;
};


const Card = ({ Tnumber, Theading, Tdesc }: ICards) => {
    return (
        <section className="group">
            <div className="h-full border border-neutralSoftGray duration-400 group-hover:border-primaryDark group-hover:bg-primaryLight p-4 rounded-2xl">
                <div className="mb-6 bg-primarySoft group-hover:bg-white rounded-lg px-5 py-3 w-fit">
                    <p className="text-[18px] font-semibold smallLineHeight text-primaryDark">{Tnumber}</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-[20px] font-semibold midLineHeight">{Theading}</h4>
                    <p className="text-[16px] text-neutralLightGray group-hover:text-black duration-400 highLineHeight">{Tdesc}</p>
                </div>
            </div>
        </section>
    )
}

export default Card;