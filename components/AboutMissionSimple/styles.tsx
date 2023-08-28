import styled from "styled-components";
import Colors from '../../styles/colors';

export const Container = styled.div`
    background-image: url('/assets/images/medicamento.png');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 550px 330px;
    min-height: 305px;
    display: flex;
    align-items: center;
    margin: 50px 0px;
    max-width: 1500px;
    margin: 50px auto;
    @media screen and (max-width: 1380px){
        background-size: 500px auto;
    }
    @media screen and (max-width: 1280px){
        background-size: 450px auto;
    }
    @media screen and (max-width: 1180px){
        background: none;
    }
`;

export const Content = styled.section`
    display: flex;
    position: relative;
    justify-content: end;
`;

export const Text = styled.div`
    p{
        font-size: 16px;
        line-height: 26px;
        color: ${Colors.Secondary};
        font-weight: 400;
        max-width: 700px;
    }
    @media screen and (max-width: 1100px){
        p{
            max-width: 550px;
        }
    }
    @media screen and (max-width: 1180px){
        p{
            max-width: 100%;
            width: 100%
        }
    }
`;

export const Ilustration = styled.div`
    width: 515px;
    height: 305px;
    position: relative;
`;
