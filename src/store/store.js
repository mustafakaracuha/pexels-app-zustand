import {create} from "zustand";

const useStore = create((set) => ({
  images: [],
  darkMode: localStorage.getItem("darkMode") === "true",

  toggleDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", newDarkMode);
      return { darkMode: newDarkMode };
    });
  },
  setImages: (newImages) => set({ images: newImages }),
}));

export { useStore };
