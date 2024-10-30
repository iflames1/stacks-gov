import { DAO, PROPOSAL } from "@/types/dao";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchDao(username: string): Promise<DAO | null> {
  try {
    const response = await axios.get("/data.json");
    const data: DAO[] = response.data;
    const dao = data.find(
      (dao) => dao.username.toLowerCase() === username.toLowerCase()
    );
    if (!dao) {
      return null;
    }
    return dao;
  } catch (error) {
    console.error("Error fetching DAOs:", error);
    return null;
  }
}

export async function fetchProposal(
  username: string,
  proposalId: number
): Promise<PROPOSAL | null> {
  try {
    const response = await axios.get("/data.json");
    const data: DAO[] = response.data;
    const dao = data.find(
      (dao) => dao.username.toLowerCase() === username.toLowerCase()
    );
    if (!dao) {
      return null;
    }
    const proposal = dao.proposals[proposalId];
    if (!proposal) {
      return null;
    }
    return proposal;
  } catch (error) {
    console.error("Error fetching proposal:", error);
    return null;
  }
}
