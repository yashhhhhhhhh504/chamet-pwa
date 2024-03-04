import { create } from 'zustand';

type CallCardState = {
  callCardVisibility: boolean;
  audioCall: boolean;
};

type CallCardActions = {
  toggleCallCardVisibility: () => void;
  toggleAudioCall: () => void;
};

const useCallCardStore = create<CallCardState & CallCardActions>((set) => ({
  callCardVisibility: false,
  audioCall: false,
  toggleCallCardVisibility: () =>
    set((state) => ({ callCardVisibility: !state.callCardVisibility })),
  toggleAudioCall: () => set((state) => ({ audioCall: !state.audioCall })),
}));

export { useCallCardStore };
