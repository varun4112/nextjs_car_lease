"use client"
import React, { useState } from 'react'
import styles from "./Accordian.module.css"

interface faqInterface {
    id: number;
    question: string;
    answer: string;
}

interface AccordionProps {
    faqs: faqInterface[];
}

const Accordian: React.FC<AccordionProps> = ({ faqs }) => {

    const [active, setActive] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActive(active === index ? null : index);
    };

    return (
        <div className={styles.accordionContainer}>
            {faqs.map((faq: faqInterface, index: number) => (
                <div key={faq.id} className={styles.accordionBox}>
                    <button
                        className={styles.accordion}
                        onClick={() => { handleToggle(index) }}
                    >
                        {faq.question}
                        <img
                            className={`${styles.rotateImage} ${active === index ? styles.active : ''}`}
                            src="logos/xmarkxmark.svg"
                            alt="toggle icon"
                        />
                    </button>
                    <div
                        className={`${styles.panel} ${active === index ? styles.open : ''}`}
                    >
                        <p className={styles.panelPara}>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordian