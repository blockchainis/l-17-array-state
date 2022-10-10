import { useState } from "react";

let initialCards = [
  { id: crypto.randomUUID(), flipped: false },
  { id: crypto.randomUUID(), flipped: false },
  { id: crypto.randomUUID(), flipped: false },
];
function Cards() {
  const [cards, setCards] = useState(initialCards);
  return (
    <div>
      {cards.map(({ id, flipped }) => {
        return (
          <div
            style={{
              width: 150,
              height: 150,
              background: flipped ? "red" : "grey",
              margin: 10,
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Cards;
