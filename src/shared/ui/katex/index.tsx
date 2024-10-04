import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const MathBlock = ({ children }: { children: string }) => (
  <BlockMath math={children} />
);

export const MathInline = ({ children }: { children: string }) => (
  <InlineMath math={children} />
);
