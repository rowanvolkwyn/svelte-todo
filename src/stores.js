import { writable } from "svelte/store";

export const items = writable([
    {
        id: 1,
        text: "Take out the bins",
        completed: false
    },
    {
        id: 2,
        text: "Buy milk",
        completed: false
    },
    {
        id: 3,
        text: "Water the plants",
        completed: true
    }
]);