'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface FilterContextType {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
    textFilter: string;
    setTextFilter: Dispatch<SetStateAction<string>>;
  }
  
  export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
    const [filter, setFilter] = useState<string>('');
    const [textFilter, setTextFilter] = useState<string>('');
  
    return (
      <FilterContext.Provider value={{ filter, setFilter, textFilter, setTextFilter }}>
        {children}
      </FilterContext.Provider>
    );
  }

  export function useFilter() {
    const context = useContext(FilterContext);
    if (context === undefined) {
      throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
  }