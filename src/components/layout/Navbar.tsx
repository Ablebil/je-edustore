"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { LayoutDashboard, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // check user session to determine if logged in
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    // handle scroll to change navbar style
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 ${
        scrolled
          ? "py-4 bg-surface/80 backdrop-blur-xl shadow-sm"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="w-full max-w-450 mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-foreground flex items-center gap-2 group"
        >
          <span className="text-4xl group-hover:rotate-12 transition-transform duration-300">
            🌿
          </span>
          <span>je.edustore</span>
        </Link>

        <div
          className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-gray-100/50"
              : "bg-surface/40 backdrop-blur-md border border-surface/50 shadow-sm"
          }`}
        >
          <NavLink href="/#home">Beranda</NavLink>
          <NavLink href="/#samples">Coba Gratis</NavLink>
          <NavLink href="/#products">Katalog</NavLink>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-surface rounded-full text-sm font-bold shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-105 transition-all duration-300"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          ) : (
            <a
              href={
                "https://wa.me/6281331956667?text=Halo,%20saya%20mau%20tanya"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-surface text-muted rounded-full text-sm font-bold shadow-sm border border-gray-100 hover:border-green-400 hover:text-green-600 hover:shadow-md transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">Chat Admin</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-6 py-2.5 text-sm font-semibold text-muted rounded-full hover:bg-surface hover:text-primary hover:shadow-md transition-all duration-300"
    >
      {children}
    </Link>
  );
}
