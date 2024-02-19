"use client";

import React, { createContext, useContext, useState } from "react";

const SearchBarContext = createContext<any>(undefined);

export function SearchBarWrapper({ children }: { children: React.ReactNode }) {
  let [open, setOpen] = useState(false);
  return (
    <SearchBarContext.Provider value={{ open, setOpen }}>
      {children}
    </SearchBarContext.Provider>
  );
}

export function useSearchBarContext() {
  return useContext(SearchBarContext);
}
