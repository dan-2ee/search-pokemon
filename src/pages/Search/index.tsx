import React from "react";
import * as S from "./style"

function Search() {
    return (
        <S.mainContainer>
            <S.mainContent>
                <S.pageTitle>
                    Search your Pokemon
                </S.pageTitle>
                <S.inputContainer>
                    <S.inputTitle >Pokemon Id :</S.inputTitle>
                    <S.inputBox />
                    <S.btnSearch >Search</S.btnSearch>
                </S.inputContainer>
            </S.mainContent>
        </S.mainContainer>
    )
}

export default Search;