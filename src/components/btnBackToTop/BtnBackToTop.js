import { useEffect, useState } from "react";

import './style.css';

const BtnBackToTop = () => {

    const [backToTopButton, setbackTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setbackTopButton(true);
            } else {
                setbackTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {backToTopButton && (
                <button 
                className="btn-backToTop"
                onClick={scrollUp}>^</button>
            )}
        </>
    )
}

export default BtnBackToTop;