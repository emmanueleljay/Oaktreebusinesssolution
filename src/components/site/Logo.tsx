import logo from "@/assets/oaktree-logo-v2.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo.url}
      alt="Oaktree Business Solutions logo"
      width={320}
      height={245}
      className={cn(
        "h-16 w-auto object-contain sm:h-20 lg:h-24",
        invert && "brightness-0 invert",
        className,
      )}
    />
  );
}
