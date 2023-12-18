import { View } from "react-native";
import styled from "styled-components/native";

type DividerContainerProps = {
    margin: string;
}

export const DividerContainer = styled.View<DividerContainerProps>`
    margin: ${(props: DividerContainerProps) => props.margin};
`;