import styled from "styled-components/native";

type ViewContainerProps = {
    backgroundColor?: string;
}

export const ViewContainer = styled.View<ViewContainerProps>`
    background-color: ${(props: ViewContainerProps) => props.backgroundColor};
`;