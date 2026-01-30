import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products, error } = await supabase.from("products").select("*");

  return (
    <div>
      <h1>Je Edustore</h1>

      {error ? (
        <div>
          <p>error connecting to supabase:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : (
        <div>
          <p>connected to supabase</p>
          <p>products count in db: {products?.length || 0}</p>
        </div>
      )}
    </div>
  );
}
