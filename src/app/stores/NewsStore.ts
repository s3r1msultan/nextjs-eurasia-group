import { create } from "zustand";
import { INews } from "../constants/interfaces";
const useNews = create((set) => ({
  news: [],
  setNews: (news: INews[]) => set({ news }),
  fetchNews: async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    set({ news: data });
  },
  fetchNewsById: async (id: number) => {
    const res = await fetch(`/api/news/${id}`);
    const data = await res.json();
    set({ news: data });
  },
}));
