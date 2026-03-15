import path from "path";
import { supabase } from "./supabase.ts";

export async function uploadImage(file: Express.Multer.File) {
  const fileExt = path.extname(file.originalname);
  const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${fileExt}`;
  const filePath = `products/${fileName}`;

  const { data: storageData, error: storageError } = await supabase.storage
    .from("product-images")
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
    });

  if (storageError) throw storageError;

  // Get Public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from("product-images").getPublicUrl(filePath);
  
  return publicUrl;
}
