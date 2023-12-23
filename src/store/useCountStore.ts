import { create } from "zustand";

interface Props {
  num: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useCountStore = create<Props>((set) => ({
  num: 0,
  increasePopulation: () =>
    set((state: { num: number }) => ({ num: state.num + 1 })),
  removeAllBears: () => set({ num: 0 }),
}));

export default useCountStore;
