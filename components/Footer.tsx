import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 px-4 py-10 md:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-base font-semibold text-white">
          <Truck className="h-5 w-5 text-accent" />
          <span>SwiftMove</span>
        </div>
        <div className="flex flex-col gap-3 text-center md:flex-row md:gap-6">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
        <div className="text-center md:text-right">© 2026 SwiftMove</div>
      </div>
      <div className="mx-auto mt-6 w-full max-w-6xl text-center text-xs text-white/60">
        SwiftMove Logistics Pvt. Ltd., 42 Transport Nagar, Indore, MP 452001
      </div>
    </footer>
  );
}
