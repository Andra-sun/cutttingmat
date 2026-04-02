import { motion } from "framer-motion";
import { useBoardStore } from "./boardStore";
import { componentRegistry } from "./componentRegistry";
import type { CardType } from "./cardProp";
import box1img from "../../assets/caixas_0000_box1.png";
import box2img from "../../assets/caixas_0001_box2.png";

type CardProps = {
  card: CardType;
};

const boxImageMap: Record<string, string> = {
  box1: box1img,
  box2: box2img,
};

export function Card({ card }: CardProps) {
  const moveCard = useBoardStore((s) => s.moveCard);
  const Component = componentRegistry[card.component];

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: card.x, y: card.y }}
      onDragEnd={(_, info) => {
        moveCard(
          card.id,
          card.x + info.offset.x,
          card.y + info.offset.y
        );
      }}
      className="absolute cursor-grab active:cursor-grabbing"
      onPointerDown={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest("[data-techicon]")) {
          e.stopPropagation();
        }
      }}
    >
      {Component ? (
        <Component
          techData={card.techData}
          {...(card.techBoxData
            ? {
                title: card.techBoxData.title,
                techs: card.techBoxData.techs,
                boxImage: boxImageMap[card.techBoxData.variant],
              }
            : {})}
        />
      ) : (
        <p>...</p>
      )}
    </motion.div>
  );
}