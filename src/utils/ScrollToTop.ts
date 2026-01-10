"use client";

import { useEffect } from "react";
import { usePathname } from 'next/navigation'

const ScrollToTop = (e:React.FormEvent) => {

    const  pathName  = usePathname();

    useEffect(() => {
        if (window.location.pathname === "/" || window.location.pathname === "/en" || window.location.pathname === "/ar") {
            e.preventDefault();
            window.scrollTo({ "top": 0, behavior: "smooth" })
        }
    }, [pathName]);
}

export default ScrollToTop;