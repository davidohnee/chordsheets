import { ref } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
    const newEditor = ref(true);
    const editorUrl = (songId: number) => {
        const base = "/editor/";
        return base + songId;
    };

    return {
        newEditor,
        editorUrl
    };
});
