import { cn, tw } from "@/src/shared/lib";

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  className?: string;
}

export const Spacer = ({ height, className }: SpacerProps) => {
  return (
    <div
      style={{ height: `${height}px` }}
      className={cn(tw`w-full`, className)}
    />
  );
};
