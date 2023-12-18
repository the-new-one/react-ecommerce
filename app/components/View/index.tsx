import { ReactNode } from 'react';
import * as S from './style';

type ViewContainerProps = {
    backgroundColor?: string;
    children: ReactNode;
}

export const ViewContainerComponent = ({backgroundColor, children}: ViewContainerProps) => {
    return <S.ViewContainer backgroundColor={backgroundColor}>
        {children}
    </S.ViewContainer>
}