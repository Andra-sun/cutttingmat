import { motion } from "framer-motion";
import { useBoardStore } from "./boardStore";
import { componentRegistry } from "./componentRegistry";
import type { CardType } from "./cardProp";

type CardProps = {
  card: CardType;
};

export function Card({ card }: CardProps) {
  const moveCard = useBoardStore((s) => s.moveCard);
  const Component = componentRegistry[card.component];

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: card.x, y: card.y }}
      onDragEnd={(e, info) => {
        moveCard(
          card.id,
          card.x + info.offset.x,
          card.y + info.offset.y
        );
      }}
      className="absolute cursor-grab active:cursor-grabbing"
    >
      {Component ? <Component /> : <p>Component "{card.component}" não encontrado</p>}
    </motion.div>
  );
}