import React from "react";
import AccordianItem from "./AccordianItem";
import { faqs } from "../data/data";
const Accordian = () => {
  return (
    <div className="accordion">
      {faqs.map((item, i) => {
        return (
          <AccordianItem
            title={item.title}
            desc={item.text}
            num={i}
            key={item.text}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
