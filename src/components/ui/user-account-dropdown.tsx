"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User } from "lucide-react";

const UserAccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-[#333333] rounded-lg text-white hover:bg-black/60 transition"
      >
        <User className="w-4 h-4" />
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-gray-800 rounded-lg shadow-lg backdrop-blur-md py-2 z-50">
          <Link
            href="/account/manage"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Manage Account
          </Link>
          <Link
            href="/account/settings"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Settings
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAccountDropdown;
