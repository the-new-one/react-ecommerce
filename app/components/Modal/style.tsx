import styled from "styled-components";
import { COLORS } from "../../constants/color";
import { View } from "react-native";

type CustomModalStyleProps = {
    isVisible: boolean;
}

export const CustomModalStyle = styled(View)<CustomModalStyleProps>`
    background: transparent;
    position: absolute;
    margin: 0px;
    border: none;
    bottom: 0px;
    justify-content: flex-end;
`;

export const ModalContent = styled(View)`
    background: transparent;
    margin-top: 100px;
    width: 500px;
    height: 50px;
    padding: 10px;
`;
