import { useState } from "react";

let initialCards = [
  { id: crypto.randomUUID(), flipped: false },
  { id: crypto.randomUUID(), flipped: false },
  { id: crypto.randomUUID(), flipped: false },
];
function Cards() {
  const [cards, setCards] = useState(initialCards);
  const handleCardClick = (clickedId) => () => {
    const updatedCards = cards.map((card) => {
      if (card.id === clickedId) {
        return { ...card, flipped: !card.flipped };
      } else {
        return card;
      }
    });
    setCards(updatedCards);
  };
  return (
    <div>
      {cards.map(({ id, flipped }) => {
        return (
          <div
            onClick={handleCardClick(id)}
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
