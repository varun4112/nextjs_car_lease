"use client"
import React, { useState } from 'react'
import styles from "./Accordian.module.css"
import Image from 'next/image';

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
                        <Image
                            className={`${styles.rotateImage} ${active === index ? styles.active : ''}`}
                            src="logos/xmarkxmark.svg"
                            alt="toggle icon"
                            width={24}
                            height={24}
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