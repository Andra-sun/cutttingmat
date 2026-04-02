import { useState } from "react";
import { motion } from "framer-motion";

type Tech = { name: string; image: string };

type TechBoxProps = {
    title: string;
    techs: Tech[];
    boxImage: string;
};

const BOX_INNER_W = 450;
const BOX_INNER_H = 600;
const ICON_W = 64;
const ICON_H = 72;
const COLS = 4;

export function TechBox({ title, techs, boxImage }: TechBoxProps) {
    const [positions, setPositions] = useState(() =>
        techs.map((_, i) => ({
            x: 20 + (i % COLS) * ((BOX_INNER_W - 33 - ICON_W) / (COLS - 1)),
            y: BOX_INNER_H / 2.4 + 50 + Math.floor(i / COLS) * 80,
        })),
    );

    return (
        <div
            className="relative select-none"
            style={{ width: BOX_INNER_W + 50 }}
        >
            <img
                src={boxImage}
                alt={title}
                draggable="false"
                className="absolute inset-0 w-full object-fill pointer-events-none"
                style={{ zIndex: 0 }}
            />

            <div
                className="relative z-10 px-5 pt-4 pb-2"
                style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "rgba(0,0,0,0.6)",
                    letterSpacing: "0.04em",
                    userSelect: "none",
                }}
            >
                {title}
            </div>

            <div
                className="relative z-10 mx-5 mb-5"
                style={{
                    width: BOX_INNER_W,
                    height: BOX_INNER_H,
                    overflow: "hidden",
                }}
            >
                {techs.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        drag
                        dragMomentum={false}
                        dragConstraints={{
                            top: 0,
                            left: 10,
                            right: BOX_INNER_W - ICON_W - 10,
                            bottom: BOX_INNER_H - ICON_H - 60,
                        }}
                        dragElastic={0}
                        initial={{ x: positions[i].x, y: positions[i].y }}
                        onDragEnd={(_, info) => {
                            setPositions((prev) => {
                                const updated = [...prev];
                                updated[i] = {
                                    x: Math.min(
                                        Math.max(10, prev[i].x + info.offset.x),
                                        BOX_INNER_W - ICON_W - 10,
                                    ),
                                    y: Math.min(
                                        Math.max(0, prev[i].y + info.offset.y),
                                        BOX_INNER_H - ICON_H - 60,
                                    ),
                                };
                                return updated;
                            });
                        }}
                        className="absolute flex flex-col items-center gap-0.5"
                        style={{ width: ICON_W, cursor: "grab", zIndex: 10 }}
                        whileDrag={{
                            scale: 1.15,
                            zIndex: 50,
                            cursor: "grabbing",
                        }}
                        whileHover={{ scale: 1.08 }}
                    >
                        <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-10 h-10 drop-shadow"
                            draggable="false"
                        />
                        <span
                            className="text-center font-semibold"
                            style={{
                                fontSize: "9px",
                                color: "rgba(0,0,0,0.7)",
                                maxWidth: ICON_W,
                                lineHeight: 1.2,
                            }}
                        >
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
