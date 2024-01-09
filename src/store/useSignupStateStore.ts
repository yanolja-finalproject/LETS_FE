import { create } from "zustand";

interface Props {
  isSignup: boolean;
  certificated: boolean;
  setCertificated: VoidFunction;
  setIsSignup: VoidFunction;
}

const useSignupStateStore = create<Props>((set) => ({
  isSignup: false,
  certificated: false,
  setCertificated: () => set({ certificated: true }),
  setIsSignup: () => set({ isSignup: true }),
}));

export default useSignupStateStore;
