import React from "react";
import { Container, HeaderContainer, HeaderImg, TitleText, TitleColored, Subtitle,  } from './styles'
import { ImageBackground } from "react-native";

import Background from "../../assets/images/Background.png";
import Cloud from "../../assets/images/CloudIcon.png";

export default function Search() {
    return (
        <Container source={Background} resizeMode="cover">
            <HeaderContainer>
                <HeaderImg source={Cloud}  /> 
                <TitleText> TypeWeather </TitleText>
            </HeaderContainer>
            <TitleContainer>
            <TitleText>
                Boas vindas ao <TitleColored>TypeWeather</TitleColored>
            </TitleText>
            <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
            </TitleContainer>
            <input>Buscar Local</input>
        </Container>
    );
    
}