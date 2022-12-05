import React from "react";
import * as S from "./style"

function ViewPokemon(props: any) {
    console.log("view", props.pokemonData["name"]);
    console.log("img", props.pokemonData["sprites"]["other"]["home"]["front_shiny"])
    return (
        <S.mainContainer>
            <S.pokemonImg src={props.pokemonData["sprites"]["other"]["home"]["front_shiny"]}/>
            <S.pokemonInfo># {props.pokemonData["id"]}</S.pokemonInfo>
            <S.pokemonInfo>{props.pokemonData["name"]}</S.pokemonInfo>
        </S.mainContainer>
    )
}

export default ViewPokemon;