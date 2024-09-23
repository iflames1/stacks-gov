import { DAO } from "@/types/dao";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchDao(username: string) {
  console.log("hiii");
  try {
    const response = await axios.get("/data.json");
    const data: DAO[] = response.data;
    const dao = data.find((dao) => dao.username.toLowerCase() === username);
    if (!dao) {
      return null;
    }
    return dao;
  } catch (error) {
    console.error("Error fetching DAOs:", error);
    return null;
  }
}
