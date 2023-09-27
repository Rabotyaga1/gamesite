import { defineStore } from "pinia";

export const useAppStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      xyu: "big",
    };
  },
});
