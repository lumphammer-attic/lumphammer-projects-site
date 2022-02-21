import { browser } from "$app/env";
import { writable } from "svelte/store";
import type { ToDoItemDict } from "./types";

const initialToDos: ToDoItemDict = {
  one: {
    label: "Make a to-do list in Svelte",
    completed: false
  },
  two: {
    label: "Drink tea",
    completed: false
  },
  three: {
    label: "Start a Svelte project",
    completed: true
  }
};

const loadedToDos = browser && window.localStorage.getItem("toDos")
  ? JSON.parse(window.localStorage.getItem("toDos")) 
  : initialToDos;

export const toDoItems = writable(loadedToDos);

toDoItems.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("toDos", JSON.stringify(value));
  }
});