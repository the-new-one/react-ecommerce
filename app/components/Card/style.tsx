import { View } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../constants/color";

const CardContainerStyle = styled(View)`
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.GRAY};
    padding: 5px;
`;

export {CardContainerStyle}