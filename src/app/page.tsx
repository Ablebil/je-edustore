import HeroSection from "@/components/home/HeroSection";
import SampleSection from "@/components/home/SampleSection";
import PremiumSection from "@/components/home/PremiumSection";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true);

  const sampleProducts = products?.filter((p) => p.price === 0) || [];
  const premiumProducts = products?.filter((p) => p.price > 0) || [];

  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden font-sans selection:bg-primary selection:text-white">
      <HeroSection />
      <SampleSection products={sampleProducts} />
      <PremiumSection products={premiumProducts} />
    </div>
  );
}
