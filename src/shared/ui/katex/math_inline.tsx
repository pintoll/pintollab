import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const MathInline = ({ children }: { children: string }) => (
  <InlineMath math={children} />
);
