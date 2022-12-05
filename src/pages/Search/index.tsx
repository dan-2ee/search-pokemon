import React, { useState } from "react";
import { json } from "stream/consumers";
import * as S from "./style"
import ViewPokemon from "../ViewPokemon";
import ViewFail from "../ViewFail";

function Search() {
    const [id, setId] = useState<string>("");
    const [dataCheck, setDataCheck] = useState<boolean>(false);
    const [data, setData] = useState<JSON>();
    const [idCheck, setIdCheck] = useState<boolean>(true);
    const [isClick, setIsClick] = useState<boolean>(false);

    const handleChange = (e: any) => {
        if (isNaN(e.target.value)) setIdCheck(false);
        else if (e.target.value === "0") setIdCheck(false);
        else if (e.target.value === "1000") setIdCheck(false);
        else if (e.target.value === "") setIdCheck(true);
        else setIdCheck(true);
        setId(e.target.value);
    }

    const getPokemonData = () => {
        setIsClick(true);
        if (id && idCheck){
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setDataCheck(true);
            })
            .catch(function (error) {
                console.log(error);
                setDataCheck(false)
            });
        }
        else {
            setDataCheck(false);
        }
    }

    return (
        <S.mainContainer>
            <S.mainContent>
                <S.pageTitle>
                    Search your Pokemon
                </S.pageTitle>
                <S.inputContainer>
                    <S.inputTitle check={idCheck} >Pokemon Id :</S.inputTitle>
                    <S.inputBox check={idCheck} onChange={handleChange}/>
                    <S.btnSearch onClick={getPokemonData}>Search</S.btnSearch>
                </S.inputContainer>
                {isClick ? 
                    dataCheck ? <ViewPokemon pokemonData = {data}/> : <ViewFail />
                     : null}
            </S.mainContent>
        </S.mainContainer>
    )
}

export default Search;