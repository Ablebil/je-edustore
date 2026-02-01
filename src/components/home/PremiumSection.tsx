"use client";

import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

export default function PremiumSection({ products }: { products: Product[] }) {
  const dummyItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section
      id="products"
      className="w-full bg-cream py-16 md:py-32 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 text-center md:text-left w-full md:w-auto">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Koleksi Premium
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
              Investasi{" "}
              <span className="relative inline-block text-accent z-10">
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#16A34A"
                  strokeWidth={3}
                  iterations={3}
                  padding={2}
                  animationDuration={2000}
                  multiline={true}
                >
                  Masa Depan.
                </RoughNotation>
              </span>
            </h2>

            <p className="text-muted max-w-lg text-sm md:text-lg mx-auto md:mx-0 pt-2">
              Koleksi materi lengkap dan aset premium untuk mendukung kegiatan
              belajar mengajar yang lebih efektif.
            </p>
          </div>

          <a
            href="/products"
            className="hidden md:flex group items-center gap-2 text-muted font-bold hover:text-primary transition-colors pb-2"
          >
            Lihat Semua Produk
            <div className="w-10 h-10 rounded-full bg-surface border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-surface transition-all shadow-sm">
              <ArrowRight size={18} />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {dummyItems.map((item) => (
            <div
              key={item}
              className="group bg-surface p-3 md:p-4 rounded-2xl md:rounded-3xl border border-transparent hover:border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="aspect-square bg-gray-100 rounded-xl md:rounded-2xl mb-4 overflow-hidden relative">
                <div className="absolute top-2 left-2 px-2 py-1 bg-orange-100 text-orange-700 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm z-10">
                  Best Seller
                </div>

                <div className="hidden md:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                  <button className="px-5 py-2.5 bg-surface text-foreground font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm hover:bg-primary hover:text-surface">
                    Lihat Detail
                  </button>
                </div>
              </div>

              <div className="flex-1 space-y-1 md:space-y-2">
                <h3 className="font-bold text-foreground text-base md:text-xl leading-snug transition-colors line-clamp-2">
                  Produk Premium {item}
                </h3>

                <p className="text-muted text-xs md:text-sm line-clamp-2">
                  Pelajari dasar-dasar materi ini dengan modul ringkas.
                </p>
              </div>

              <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider mb-0.5">
                    Harga
                  </span>
                  <span className="text-accent font-black text-lg md:text-2xl leading-none">
                    {formatRupiah(150000)}
                  </span>
                </div>

                <button className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-foreground text-surface flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <ShoppingBag size={16} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-gray-200 rounded-full font-bold text-sm text-muted shadow-sm"
          >
            Lihat Semua
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
