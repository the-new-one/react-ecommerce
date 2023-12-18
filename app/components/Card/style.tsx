import { View } from "react-native";
import styled from "styled-components";
import { CONSTANT_COLORS } from "../../constants/color";

const CardContainerStyle = styled(View)`
    background-color: ${CONSTANT_COLORS[2].value};
    border: 1px solid ${CONSTANT_COLORS[0].value};
    padding: 5px;
`;

export {CardContainerStyle}