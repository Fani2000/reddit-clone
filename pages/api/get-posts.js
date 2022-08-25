import { supabase } from "../../services/superbaseClient";

export default async (req, res) => {
  const { data } = await supabase
    .from("feed")
    .select("*")
    .order("id", { ascending: false });

  res.status(200).json({ data });
};
