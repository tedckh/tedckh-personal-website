"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ModalStateContextType = {
  isOpen: boolean;
  images: string[];
};
const ModalStateContext = createContext<ModalStateContextType | undefined>(
  undefined,
);

type ModalActionsContextType = {
  openModal: (images: string[]) => void;
  closeModal: () => void;
};
const ModalActionsContext = createContext<ModalActionsContextType | undefined>(
  undefined,
);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const openModal = useCallback((imageList: string[]) => {
    setImages(imageList);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setImages([]), 300);
  }, []);

  const stateValue = useMemo(() => ({ isOpen, images }), [images, isOpen]);
  const actionsValue = useMemo(
    () => ({ openModal, closeModal }),
    [closeModal, openModal],
  );

  return (
    <ModalStateContext.Provider value={stateValue}>
      <ModalActionsContext.Provider value={actionsValue}>
        {children}
      </ModalActionsContext.Provider>
    </ModalStateContext.Provider>
  );
}

export const useModalState = () => {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error("useModalState must ve used within a ModalProvider");
  }
  return context;
};

export const useModalActions = () => {
  const context = useContext(ModalActionsContext);
  if (context === undefined) {
    throw new Error("useModalActions must be used within a ModalProvider");
  }
  return context;
};
