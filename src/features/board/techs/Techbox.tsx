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
            x: 20 + (i % COLS) * ((BOX_INNER_W - 50 - ICON_W) / (COLS - 1)),
            y: BOX_INNER_H / 2.33 + 55 + Math.floor(i / COLS) * 90,
        })),
    );

    return (
        <motion.div
            className="relative select-none"
            style={{ width: BOX_INNER_W + 50 }}
            initial={{ y: -120, rotate: -2, scale: 0.98 }}
            animate={{ y: 0, rotate: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                mass: 1.2,
            }}
        >
            <img
                src={boxImage}
                alt={title}
                draggable="false"
                className="absolute inset-0 w-full object-fill pointer-events-none"
                style={{ zIndex: 0 }}
            />

            <div
                className="absolute z-10 w-full text-center text-2xl font-bold mt-30"
                style={{
                    fontFamily: "'Georgia', serif",
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
                            top: 50,
                            left: 16,
                            right: BOX_INNER_W - ICON_W - 20,
                            bottom: BOX_INNER_H - ICON_H - 29,
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
                        className="absolute flex flex-col items-center gap-0.5 cursor-grabbing "
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
                            draggable="false"
                            className="w-14 p-2 rounded-2xl -bg-linear-330 from-white/40 via-white/20 to-white backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/30 transition"
                        />
                        <span
                            className="text-center font-semibold"
                            style={{
                                fontSize: "10px",
                                color: "rgba(0,0,0,0.7)",
                                maxWidth: ICON_W,
                                lineHeight: 1.4,
                            }}
                        >
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
