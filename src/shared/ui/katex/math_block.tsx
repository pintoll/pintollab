import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

export const MathBlock = ({ children }: { children: string }) => (
  <BlockMath math={children} />
);
