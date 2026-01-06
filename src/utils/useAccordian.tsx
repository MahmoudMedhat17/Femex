"use client";


import { useState } from "react";


const useAccordian = () => {
    const [accordianOpen, setAccordianOpen] = useState<number | null>(null);

    const isOpen = (index: number) => index === accordianOpen;

    const onAccordianActive = (index: number) => {
        setAccordianOpen((prev) => prev === index ? null : index);
    };


    return { isOpen, onAccordianActive };
};



export default useAccordian;