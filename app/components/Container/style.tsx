import { View } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerStyleProps = {
    backgroundColor?: string;
    width?: string;
    height?: string;
    hasBackground?: boolean;
};

export const ContainerStyle = styled.View<ContainerStyleProps>`
    padding: 10px;
    position: relative;
    ${(props: ContainerStyleProps) => props.hasBackground && css`
        background-color: ${props.backgroundColor};
        border-radius: 100px;
        width: ${props.width};
        height: ${props.height};
    `}
`;