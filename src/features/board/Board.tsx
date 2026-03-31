import { useBoardStore } from "./boardStore";
import { Card } from "./Card";

export function Board() {
  const cards = useBoardStore((s) => s.cards);

  return (
    <div className="w-screen h-screen bg-transparent absolute overflow-hidden">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}