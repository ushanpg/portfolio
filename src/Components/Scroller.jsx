import React, { useState } from 'react';

export default function Scroller() {

    const [visible, setVisible] = useState(false);

    document.addEventListener("scroll", () => {

        let position = window.scrollY;

        if (position > 50){
        setVisible(true);
        }
        else{
        setVisible(false);
        };
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
    <div>
        {visible && (<i className="bi bi-arrow-up-circle-fill fa-lg scrollbutton" onClick={scrollToTop} ></i>)}
    </div>
  )
}
