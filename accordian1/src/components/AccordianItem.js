import React, { useState } from "react";

const AccordianItem = ({ title, key, num, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">+</p>

      {isOpen && <div className="content-box">{desc}</div>}
    </div>
  );
};

export default AccordianItem;
