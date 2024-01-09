import { create } from "zustand";

interface Props {
  email: string;
  password: string;
  name: string;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  updateName: (name: string) => void;
}

const useSignupInfoStore = create<Props>((set) => ({
  email: "",
  password: "",
  name: "",
  updateEmail: (email) => set(() => ({ email })),
  updatePassword: (password) => set(() => ({ password })),
  updateName: (name) => set(() => ({ name })),
}));

export default useSignupInfoStore;
