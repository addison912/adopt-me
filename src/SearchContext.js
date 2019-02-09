import React from "react";

const SearchContext = React.createContext({
  location: "Oakland, CA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleInputChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
