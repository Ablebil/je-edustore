import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { formatRupiah } from "@/lib/utils";

export default function HeroSection() {
  const featuredProduct = {
    image: "/images/hero-product.png",
    price: 15000,
    title: "E-Modul\nInteraktif",
    subtitle: "Edisi Lengkap Terupdate",
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[105vh] flex items-center justify-center pt-20 pb-32"
    >
      {/* background atmosphere */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-orange-100 rounded-full blur-[100px] opacity-70 mix-blend-multiply" />

      {/* floating geometric objects */}
      <div
        className="absolute bottom-[5%] left-[0%] md:left-[2%] w-16 h-16 md:w-24 md:h-24 border-12 md:border-16 border-accent rounded-full shadow-2xl animate-bounce delay-700 z-10 hidden sm:block"
        style={{ animationDuration: "4s" }}
      />

      <div
        className="absolute top-[8%] right-[2%] md:right-[5%] w-14 h-14 md:w-20 md:h-20 bg-linear-to-br from-surface/40 to-green-300/20 backdrop-blur-md rounded-full shadow-[inset_0_-5px_10px_rgba(0,0,0,0.1)] border border-surface/40 animate-bounce delay-100 z-10 hidden sm:block"
        style={{ animationDuration: "6s" }}
      />

      <div className="absolute top-[12%] left-[2%] w-12 h-12 bg-primary/10 rounded-xl border border-primary/20 rotate-30 animate-pulse hidden lg:block" />

      <svg
        className="absolute bottom-[18%] left-[35%] w-24 h-24 text-accent/40 animate-pulse delay-1000 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50C30 20 50 80 90 50"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* main content */}
      <div className="w-full max-w-450 mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left relative">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface/70 backdrop-blur-lg border border-surface/60 rounded-full shadow-sm mx-auto lg:mx-0 cursor-default hover:bg-surface transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-muted tracking-wide uppercase">
              TEPERCAYA DAN BERKUALITAS
            </span>
          </div>

          {/* headline */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-foreground leading-[1.05] tracking-tight">
            Belajar Jadi <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-primary to-green-600 pb-2">
              Lebih Seru.
              <svg
                className="absolute bottom-0 left-0 w-full h-3 text-accent"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Modul digital & aset kreatif berkualitas tinggi. Materi interaktif
            untuk meningkatkan motivasi dan pemahaman siswa di kelas.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
            <a
              href="#products"
              className="group px-9 py-4 bg-accent text-surface rounded-full font-bold text-lg shadow-[0_10px_30px_-10px_rgba(251,146,60,0.5)] hover:bg-orange-500 hover:scale-105 hover:-rotate-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lihat Katalog{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#samples"
              className="px-9 py-4 bg-surface text-foreground border-2 border-transparent hover:border-gray-100 rounded-full font-bold text-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} /> Coba Gratis
            </a>
          </div>
        </div>

        <div className="relative h-125 md:h-187.5 flex items-center justify-center perspective-[2000px]">
          {/* orbiting circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="w-75 h-75 md:w-150 md:h-150 border-2 border-dashed border-gray-300 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-50 h-50 md:w-100 md:h-100 border border-gray-200 rounded-full" />
          </div>

          {/* main card */}
          <div className="relative w-72 md:w-104 aspect-3/4 transition-transform duration-500 hover:scale-105 group z-20 cursor-pointer">
            <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 transform translate-x-6 translate-y-6 blur-md transition-transform group-hover:rotate-12 group-hover:translate-x-8" />

            <div className="absolute inset-0 bg-linear-to-br from-surface to-green-50 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[1.5px] border-surface p-6 flex flex-col justify-between -rotate-3 group-hover:rotate-0 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />

              {/* image */}
              <div className="relative w-full h-[60%] bg-gray-100 rounded-3xl overflow-hidden mb-4 shadow-inner group">
                <Image
                  src="/images/hero-product-example.jpg"
                  alt="E-Modul Preview"
                  fill
                  priority
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 right-4 px-3 py-1 bg-surface/90 backdrop-blur text-accent text-xs font-bold uppercase tracking-widest rounded-full shadow-sm border border-surface">
                  Best Seller
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col flex-1 justify-end space-y-4">
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-foreground tracking-tight leading-none group-hover:text-primary transition-colors whitespace-pre-line">
                    {featuredProduct.title}
                  </h3>
                  <p className="text-muted font-medium text-sm">
                    {featuredProduct.subtitle}
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-[10px] text-muted uppercase font-bold tracking-wider mb-0.5">
                      Hanya Dengan
                    </p>
                    <p className="text-2xl font-black text-foreground">
                      {formatRupiah(featuredProduct.price)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-foreground group-hover:bg-primary transition-colors rounded-full flex items-center justify-center text-surface shadow-lg transform group-hover:-rotate-45 duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[8%] right-[2%] w-16 h-16 bg-linear-to-tr from-orange-200 to-orange-50 rounded-2xl shadow-lg rotate-15 animate-[bounce_5s_infinite] delay-100 z-30 hidden md:block border border-surface/50" />
        </div>
      </div>
    </section>
  );
}
