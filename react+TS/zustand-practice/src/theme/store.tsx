import create, {SetState} from 'zustand';

interface Stateprops {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}


  const useStore = create<Stateprops>((set: SetState<Stateprops>) => ({
    theme: 'light',
    toggleTheme: () =>
      set((state: Stateprops) => ({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' })),
  }));

export default useStore;