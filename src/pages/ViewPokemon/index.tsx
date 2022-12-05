import React from "react";
import * as S from "./style"

function ViewPokemon(props: any) {
    console.log("view", props.pokemonData["name"]);
    console.log("img", props.pokemonData["sprites"]["other"]["home"]["front_shiny"])
    return (
        <S.mainContainer>
            <S.pokemonName>{props.pokemonData["name"]}</S.pokemonName>
            <S.pokemonImg src={props.pokemonData["sprites"]["other"]["home"]["front_shiny"]}/>
        </S.mainContainer>
    )
}

export default ViewPokemon;