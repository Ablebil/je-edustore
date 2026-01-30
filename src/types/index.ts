export type Product = {
  id: string;
  created_at: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  file_path: string | null;
  is_active: boolean;
};

export type Order = {
  id: string;
  created_at: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  total_amount: number;
  status: "pending" | "paid" | "failed" | "expired";
  snap_token: string | null;
};
