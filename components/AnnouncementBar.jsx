"use client";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#243646] text-white text-sm lg:text-base py-2 overflow-hidden relative">
      <div
        className="whitespace-nowrap inline-block min-w-full"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        <Link
          href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20know%20about%20joining%20the%20cruise%20lines%20in%2060%20days."
          target="_blank"
          className="font-medium text-[17px] underline hover:text-green-400 transition-colors"
        >
          🎉 Secure Your Future: Join Top Cruise Lines in Just 60 Days – Chat
          With Us on WhatsApp Now! 🚢
        </Link>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
