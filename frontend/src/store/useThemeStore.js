import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chatilium-theme") || "dark",
    setTheme: (theme) => {
        localStorage.setItem("chatilium-theme", theme);
        set({ theme });
    },
}));