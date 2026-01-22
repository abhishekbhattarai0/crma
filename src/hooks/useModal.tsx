import { ModalContext } from "@/context/modal/ModalProvider";
import { useContext } from "react";

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used withing the modal provider')
    }
    return context;
}

export default useModal