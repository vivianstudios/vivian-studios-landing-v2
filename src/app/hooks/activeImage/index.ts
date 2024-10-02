import { create } from "zustand";

const imageQuantity: number = 199;

const useActiveImage = create((set) => ({
  activeImage: 1,
  maxQuantity: imageQuantity,
  setActiveImage: (id: number) =>
    set(() => {
      if (id <= 0) {
        return {
          activeImage: 1,
        };
      }
      if (id > imageQuantity) {
        return {
          activeImage: 200,
        };
      } else {
        return {
          activeImage: id,
        };
      }
    }),
  decreaseNumber: (step: number) =>
    set((state: any) => {
      if (state.activeImage >= 2) {
        return { activeImage: state.activeImage - step };
      } else {
        return { activeImage: 1 };
      }
    }),
  increaseNumber: (step: number) =>
    set((state: any) => {
      if (state.activeImage < imageQuantity) {
        return { activeImage: state.activeImage + step };
      } else {
        return { activeImage: imageQuantity };
      }
    }),
}));

export default useActiveImage;
