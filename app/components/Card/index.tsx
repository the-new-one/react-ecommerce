import { PropsWithChildren } from 'react';
import * as S from './style';

export const CardProductComponent = (props: PropsWithChildren) => {
    return <S.CardContainerStyle>
        {props.children}
    </S.CardContainerStyle>
}
