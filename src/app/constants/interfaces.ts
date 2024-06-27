export interface IUseOnClickOutside {
  onClickOutside: () => void;
}

export interface INews {
  id: number;
  title: string;
  image: string;
  description: string;
  record_category: {
    id: number;
    name: string;
  };
  created_at: string;
}



export interface NewsState {
  newsList: Array<INews>;
  category: "Partner News" | "News" | "News in agriculture";
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  error: string | null;
  setNewsList: (newsList: Array<any>) => void;
  setFilters: (category: category) => void;
  setPagination: (pagination: { currentPage: number; totalPages: number }) => void;
  setError: (error: string | null) => void;
}

export type category = "Partner News" | "News in agriculture";