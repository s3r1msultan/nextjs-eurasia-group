import { create } from "zustand";
import { INews, NewsState, category } from "../constants/interfaces";
export const useNewsStore = create<NewsState>((set) => ({
  newsList: [],
  category: "Partner News",
  pagination: {
    currentPage: 1,
    totalPages: 1,
  },
  error: null,
  setNewsList: (newsList) => set({ newsList }),
  setFilters: (category: category) => set((state) => ({...state, category } )),
  setPagination: (pagination) => set({ pagination }),
  setError: (error) => set({ error }),
}));