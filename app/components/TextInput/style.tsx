import {CSSProperties, css} from 'styled-components';
import styled from 'styled-components/native';
import {CONSTANT_COLORS} from '../../constants/color';

type TextInputProps = CSSProperties & {
  textInputType?: string;
};
export const TextInputStyle = styled.TextInput<TextInputProps>`
  ${(props: TextInputProps) =>
    props.textInputType === 'cart-input' &&
    css`
      padding: 6px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #fff;
      width: 60%;
      margin-left: 5px;
    `}
  ${(props: TextInputProps) =>
    props.textInputType === 'billing-input' &&
    css`
      background-color: ${CONSTANT_COLORS[0].value};
      padding-left: 10px;
    `}
`;
