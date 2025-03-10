import { builtinModules } from "module";
import styled from "styled-components";
import Image from "next/image";
import { OndaFooter, FundoSection2 } from "assets";

export const Fundo = styled.div`
    height:563px;
    width: 100%;
    background-image: url(${FundoSection2.src});
    background-position: 0px -60px;
    background-color: white;
    margin-top: -13%;
    display: flex;
    align-items: flex-end;
`;

export const HomeContainer = styled.div`
    min-height: 85vh;
    width: 100%;
    background-image: url(${OndaFooter.src});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap:10%;
    @media (max-width: 1024px) {
    padding-top: 3%;
    width: 100%;
    height: 565px; 
    background-image: none;
    background-color: #4C2882;
    justify-content: center;
    align-items: center;
    flex-direction: column; }

`;

export const Titulo = styled.h1`
    display: flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: #FAFAFA;
    margin-bottom: 5%;
`;

export const FaleConosco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5%;
    padding-bottom: 8%;
    @media (max-width: 1024px) {
        margin-left: 0%;
        padding-bottom: 0%;
    }
`;


export const LinhaFaleConosco = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 100%;
    @media (max-width: 1024px) {
        a {
        text-decoration: none; 
        color: #FAFAFA;
    }     }
`;


export const Infos = styled.header`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    color: #FAFAFA;
    @media (max-width: 1024px) {
        color: #FAFAFA;  
        text-decoration: none;  }
`;


export const Creditos = styled.div`
   margin-top:8%;
    display: flex;
    flex-direction: row;
    align-items:center;
    gap: 7px;
    @media (max-width: 1024px) {
        margin-top: 5%;
    }
`;

export const Inside2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2%;
`;

export const TextoCreditos = styled.header`
    color: var(--White-Back, #FAFAFA);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

  
  