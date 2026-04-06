import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  techs: string[];
  github: string;
  deploy: string;
};

type Props = {
  project: Project;
  t: (key: string) => string;
};

export function FolderCard({ project, t }: Props) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);

  const isOpen = pinned || hovered;
  const tilt = project.id % 3 === 0 ? -3 : project.id % 3 === 1 ? 2 : -1.5;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setPinned((p) => !p)}
      animate={{
        rotate: isOpen ? 0 : tilt,
        y: isOpen ? -8 : 0,
        scale: isOpen ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative w-65 cursor-grab select-none"
    >
      {/* Aba */}
      <div
        className="absolute z-10 flex items-center px-2 text-[10px] text-amber-100 bg-amber-600 rounded-t-md truncate"
        style={{ top: "-14px", left: "18px", width: "80px", height: "18px", boxShadow: "inset 0 2px 0 rgba(255,255,255,0.15)" }}
      >
        {project.name}
      </div>

      {/* pasta */}
      <div
        className="relative overflow-hidden rounded-tl-sm rounded-xl transition-shadow duration-300"
        style={{
          background: "linear-gradient(160deg, #FBBF24 0%, #F59E0B 60%, #D97706 100%)",
          boxShadow: isOpen
            ? "0 20px 40px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.15)"
            : "0 6px 18px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(0,0,0,0.04) 12px)" }}
        />

        <div className="relative z-10">
          <div
            className="mx-3.5 mt-3.5 rounded overflow-hidden"
            style={{ border: "3px solid rgba(255,255,255,0.6)", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", height: "148px" }}
          >
            <img
              src={project.image}
              alt={project.name}
              draggable="false"
              className="w-full h-full object-cover block transition-transform duration-500 ease-in-out"
              style={{ transform: isOpen ? "scale(1.06)" : "scale(1)" }}
            />
          </div>

          <p
            className="px-3.5 pt-2.5 pb-1 text-[13px] font-bold uppercase tracking-wide text-amber-900 truncate"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {project.name}
          </p>

          {/* hover */}
          <motion.div
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5 pt-1 mt-1 border-t border-amber-900/15">
              <p className="text-[15px] text-amber-800 leading-relaxed mt-1.5 mb-2.5">
                {t(project.description)}
              </p>

              <div className="flex flex-wrap gap-1 mb-2.5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide text-amber-900 bg-amber-900/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-1.5">
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-[11px] font-bold tracking-widest py-1.5 rounded-md bg-amber-900 text-amber-100 hover:bg-amber-800 transition-colors duration-200 no-underline"
                >
                  DEPLOY ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-[11px] font-bold tracking-widest py-1.5 rounded-md bg-amber-900/10 text-amber-900 border border-amber-900/25 hover:bg-amber-900/20 transition-colors duration-200 no-underline"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 rounded-full transition-opacity duration-300"
        style={{
          left: "10%", right: "10%", height: "10px",
          background: "rgba(0,0,0,0.12)",
          filter: "blur(6px)",
          opacity: isOpen ? 0.8 : 0.4,
        }}
      />
    </motion.div>
  );
}