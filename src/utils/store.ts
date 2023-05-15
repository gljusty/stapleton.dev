import { create } from "zustand";

enum CONTENT_MODE {
  DEMOS = "DEMOS",
  ABOUT = "ABOUT",
  IDLE = "IDLE",
}

type AppState = {
  open: boolean;
  toggleOpen: () => void;
  contentMode: CONTENT_MODE;
  updateMode: (u?: CONTENT_MODE) => void;
};

export const useStore = create<AppState>()((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
  contentMode: CONTENT_MODE.IDLE,
  updateMode: () =>
    set((state, u?: CONTENT_MODE) => ({
      contentMode: u
        ? u
        : CONTENT_MODE[
            Object.keys(CONTENT_MODE).indexOf(state.contentMode) < 2
              ? Object.keys(CONTENT_MODE).indexOf(state.contentMode) + 1
              : 0
          ],
    })),
}));
