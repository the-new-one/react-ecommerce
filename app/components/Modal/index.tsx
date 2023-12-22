import {StyleSheet, Text, View} from 'react-native';
import * as M from './style';
import { COLORS } from '../../constants/color';
import { useMemo } from 'react';

export type CustomModalProps = {
    buttonTextOkay?: string;
    buttonTextCancel?: string;
    textColor?: string;
};

export const CustomModal = (props: CustomModalProps) => {
    const {
        buttonTextCancel,
        buttonTextOkay,
        textColor
    } = props;
    const text = useMemo(() => {
        return <Text style={textColors(textColor??'')}>{ buttonTextOkay }</Text>
    }, [])
    return <M.CustomModalStyle>
        <M.ModalContent>
            {text}
        </M.ModalContent>
    </M.CustomModalStyle>
}

function textColors(textColor: string) {
    return {
        color: textColor
    }
}