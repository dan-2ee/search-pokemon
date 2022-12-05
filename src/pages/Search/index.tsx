import React, { useState } from "react";
import { json } from "stream/consumers";
import * as S from "./style"

function Search() {
    const [id, setId] = useState<string>("");

    const handleChange = (e: any) => {
        setId(e.target.value);
    }

    const getPokemonData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        })
    }
    return (
        <S.mainContainer>
            <S.mainContent>
                <S.pageTitle>
                    Search your Pokemon
                </S.pageTitle>
                <S.inputContainer>
                    <S.inputTitle >Pokemon Id :</S.inputTitle>
                    <S.inputBox onChange={handleChange}/>
                    <S.btnSearch onClick={getPokemonData}>Search</S.btnSearch>
                </S.inputContainer>
            </S.mainContent>
        </S.mainContainer>
    )
}

export default Search;