import { Icon } from "lucide-react";
import { whatsapp } from "@lucide/lab";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348088819924"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:size-14"
    >
      <Icon
        iconNode={whatsapp}
        className="size-6 sm:size-7"
        strokeWidth={0}
      />
    </a>
  );
}
