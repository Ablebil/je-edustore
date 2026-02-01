import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tighter text-gray-900 flex items-center gap-2"
          >
            <span>je.edustore</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-gray-600">
            <Link
              href="/#home"
              className="hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/#samples"
              className="hover:text-primary transition-colors"
            >
              Coba Gratis
            </Link>
            <Link
              href="/#products"
              className="hover:text-primary transition-colors"
            >
              Katalog
            </Link>
          </nav>

          <a
            href="https://instagram.com/je02.11"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-pink-50 transition-colors">
              <Instagram size={20} />
            </div>
            <span className="text-sm font-bold md:hidden lg:block">
              Instagram
            </span>
          </a>
        </div>

        <div className="border-t border-gray-50 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} Je Edustore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
