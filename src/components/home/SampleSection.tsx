"use client";

import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { Download } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

export default function SampleSection({ products }: { products: Product[] }) {
  const dummyItems = [1, 2, 3];

  return (
    <section
      id="samples"
      className="w-full bg-surface rounded-t-[3rem] md:rounded-t-[6rem] -mt-24 relative z-30 py-24 px-6 md:px-12 shadow-[0_-20px_60px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">
            Akses Gratis
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
            Mulai Belajar{" "}
            <span className="relative inline-block text-primary z-10">
              <RoughNotation
                type="underline"
                show={true}
                color="#FB923C"
                strokeWidth={3}
                iterations={3}
                padding={2}
                animationDuration={2000}
                multiline={true}
              >
                Tanpa Biaya.
              </RoughNotation>
            </span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg pt-4">
            Akses bahan ajar secara cuma-cuma. Coba, pelajari, dan rasakan
            kualitasnya sebelum memutuskan untuk membeli versi premium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dummyItems.map((item) => (
            <div
              key={item}
              className="group bg-surface rounded-3xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="h-48 bg-cream/50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-cream transition-colors">
                <div className="absolute top-4 left-4 px-3 py-1 bg-surface/80 backdrop-blur text-muted text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gray-100 z-10">
                  Gratis
                </div>
              </div>

              <div className="flex-1 space-y-2 mb-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  Sample Materi {item}
                </h3>
                <p className="text-muted text-sm line-clamp-2 leading-relaxed">
                  Pelajari dasar-dasar materi ini dengan modul ringkas yang
                  disusun untuk pemula.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider">
                    Harga Normal
                  </span>
                  <span className="text-muted font-medium line-through decoration-red-400 text-sm">
                    {formatRupiah(50000)}
                  </span>
                </div>

                <button className="flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 font-bold rounded-xl text-xs uppercase tracking-wide group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                  <Download size={16} />
                  Unduh
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
