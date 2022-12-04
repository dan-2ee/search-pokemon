import React, {useState} from 'react';
import * as S from './style';

function Main() {
    return (
        <S.mainContainer>

                <S.titleContainer>
                    <S.mainTitle>
                        POKEMON GO
                    </S.mainTitle>
                    <S.subTitle>{`you can \n search for \n Various pokemon`}</S.subTitle>
                </S.titleContainer>
                <S.btnStart >get started 🚀</S.btnStart>
                
            </S.mainContainer>
    )
}

export default Main;