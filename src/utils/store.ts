import { create } from "zustand";

export enum PHONE_STATE {
  DEMOS = "DEMOS",
  SPINNING = "SPINNING",
  IDLE = "IDLE",
}

export enum LAPTOP_STATE {
  DEMOS = "DEMOS",
  CONTACT = "CONTACT",
  IDLE = "IDLE",
}

type AppState = {
  open: boolean;
  toggleOpen: () => void;
  phoneMode: PHONE_STATE;
  updatePhoneMode: (u: PHONE_STATE) => void;
  laptopMode: LAPTOP_STATE;
  updateLaptopMode: (u: LAPTOP_STATE) => void;
};

export const useStore = create<AppState>()((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
  phoneMode: PHONE_STATE.IDLE,
  updatePhoneMode: (u: PHONE_STATE) =>
    set((state) => ({
      phoneMode: u,
    })),
  laptopMode: LAPTOP_STATE.IDLE,
  updateLaptopMode: (u: LAPTOP_STATE) =>
    set((state) => ({
      laptopMode: u,
    })),
}));
