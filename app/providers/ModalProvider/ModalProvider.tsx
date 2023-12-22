import { createContext, useContext, useState } from "react"
import { ModalContextModel } from "../../context/Modal.type";
import Modal from "react-native-modal";
import * as CS from '../../components/Container/style';
import * as CM from '../../components/Modal/index';
import { Text } from "react-native";
import usePrompts from "../../hooks/usePrompts";

export const ModalContext = createContext<ModalContextModel | undefined>(undefined);

type ModalProviderProps = {
    children: React.ReactNode;
};

export const ModalProvider = (props: ModalProviderProps) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);
    const {
        modal,
        alertOptions
    } = usePrompts();

    function getModalContextValue() {
        return {
            isToggled,
            setIsToggled
        }
    }
    return <ModalContext.Provider value={getModalContextValue()}>
        <CM.CustomModal {...alertOptions} />
        {props.children}
    </ModalContext.Provider>
}

export const useModalContext = () => {
    const isModalContextExist = useContext(ModalContext);

    if (!isModalContextExist) {
        throw new Error(`No modalContext exists. ${isModalContextExist}`)
    }

    return isModalContextExist;
}