import React, { useState } from "react";
import { questions } from "../data/questions";

const FlashCards = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((q) => {
        return (
          <div
            key={q.id}
            className={q.id === selected ? "selected" : ""}
            onClick={() => setSelected(q.id === selected ? null : q.id)}
          >
            <p> {q.id === selected ? q.answer : q.question}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FlashCards;
