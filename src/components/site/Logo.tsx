import logo from "@/assets/oaktree-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo.url}
      alt="Oaktree Business Solutions logo"
      width={220}
      height={150}
      className={cn(
        "h-11 w-auto object-contain sm:h-12",
        invert && "brightness-0 invert",
        className,
      )}
    />
  );
}
