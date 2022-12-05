import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function Main() {

    const navigate = useNavigate();
    const navigateToSearchPage = () => {
        navigate("/search");
    };

    return (
        <S.mainContainer>
                <S.titleContainer>
                    <S.mainTitle>
                        POKEMON GO
                    </S.mainTitle>
                    <S.subTitle>{`you can \n search for \n Various pokemon`}</S.subTitle>
                </S.titleContainer>
                <S.btnStart onClick={navigateToSearchPage}>{"get started 🚀"}</S.btnStart>
            </S.mainContainer>
    )
}

export default Main;