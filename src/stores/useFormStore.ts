import create from "zustand";

export type FormStore = {
  username: string;
  password: string;
  setUsername: (name: string) => void;
  setPassword: (password: string) => void;
};

export const useFormStore = create<FormStore>()((set) => ({
  username: "",
  password: "",
  setUsername: (name) =>
    set((state) => ({
      username: name,
    })),
  setPassword: (password) =>
    set((state) => ({
      password: password,
    })),
}));
