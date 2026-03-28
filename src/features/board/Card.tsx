import { motion } from "framer-motion";
import { useBoardStore } from "./BoardStore";

export function Card({ card }) {
  const moveCard = useBoardStore((s) => s.moveCard);

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
      className="absolute bg-white text-black p-4 rounded-xl shadow-lg cursor-grab active:cursor-grabbing"
    >
      Card {card.id}
    </motion.div>
  );
}