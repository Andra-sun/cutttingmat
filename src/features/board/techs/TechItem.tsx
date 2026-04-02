import box1 from "../../../assets/caixas_0000_box1.png";
import box2 from "../../../assets/caixas_0001_box2.png";

type TechItemProps = {
  techData?: { name: string; image: string };
};


export function TechItem({ techData }: TechItemProps) {
  if (!techData) return null;
  return (
    <div className="flex flex-col items-center gap-1 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 w-20 shadow-lg select-none">
      <img src={box1} alt="box1" />
      <img src={box2} alt="box2" />
      <img src={techData.image} alt={techData.name} className="w-10 h-10" draggable="false" />
      <span className="text-xs font-semibold text-black/80 text-center">{techData.name}</span>
    </div>
  );
}