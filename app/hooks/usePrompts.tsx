import { useMemo, useState } from "react";
import { CustomModal, CustomModalProps } from "../components/Modal";
import { COLORS } from "../constants/color";

type UsePromptsProps = {
    modal: JSX.Element,
    alertOptions: CustomModalProps;
};

export default function usePrompts (): UsePromptsProps {
    const [alertOptions, setAlertOptions] = useState<CustomModalProps>();

    const modal = useMemo(() => {
        setAlertOptions({
            buttonTextCancel: 'cancel',
            buttonTextOkay: 'okay text buttons',
            textColor: COLORS.BLACK,
        })
        return <CustomModal />
    }, [])

    return {
        modal,
        alertOptions
    }
}