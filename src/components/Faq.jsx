import React, { useState } from "react";
import { FaqData } from "./FaqData";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle=(i)=>{
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }
  return (
    <section className="section faq container">
      <h2 className="section__title">FAQ</h2>
      <span className="section__subtitle">Frequently Asked Questions</span>
      <p className="section__description">
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </p>
      <div className="all-questions">
        {FaqData.map((item, i) => {
          return (
            <div className="faq-box" key={i} onClick={()=> toggle(i)}>
              <h2 className="faq-box__question">
                {item.qustion} 
                {selected === i ? <IoIosArrowUp className="faq-box__question-icon"/>: <IoIosArrowDown className="faq-box__question-icon"/> } 
                </h2>

              <p className={selected === i ? 'faq-box__answer-show' : 'faq-box__answer' }>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
