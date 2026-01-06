import type React from "react";

interface IQuestionCards {
    question: string;
    answer: string;
    isOpen: boolean;
    onAccordianActive: () => void;
}


const QuestionCards = ({ question, answer, isOpen, onAccordianActive }: IQuestionCards) => {

    const handleSummary = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAccordianActive();
    }


    return (
        <div className="space-y-4">
            <details open={isOpen} className="group [&amp;_summary::-webkit-details-marker]:hidden">
                <summary onClick={handleSummary} className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 group-hover:border-primaryMain bg-white p-4 group-hover:bg-primaryLight  duration-400 text-neutralBlack cursor-pointer">
                    <h2 className="text-[16px] font-semibold smallLineHeight px-0.5 py-1">{question}</h2>
                    <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </summary>

                <p className="text-[16px] text-neutralDarkGray highLineHeight px-4 py-1">
                    {answer}
                </p>
            </details>
        </div >
    )
}

export default QuestionCards;