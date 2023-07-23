import { create } from "zustand";

const store = (set) => {
	return {
		tasks: [{ title: "TestTask", state: "PLANNED" }],
	};
};

export const useStore = create(store);
