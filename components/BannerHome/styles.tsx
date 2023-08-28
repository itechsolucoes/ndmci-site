import styled from "styled-components";
import Colors from '../../styles/colors';

export const FullBanner = styled.div`
    max-height: 600px;
    position: relative;
    height: 600px;
    width: 100%;
    position: relative;
    margin-bottom: 30px;

    @media screen and (max-width: 700px){
        height: auto;
        height: 580px;
        &:after{
            top: 100%;
            width: 70%;
        }
        &:before{
            height: 100%;
        }
    }
`;

export const Container = styled.div`
    background-image: url('/assets/images/bg-header.png');
    background-position: right center;
    background-repeat: no-repeat;
    min-height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    position: relative;
    max-width: 1580px;
    margin: 0px auto 30px;
    @media screen and (max-width: 960px){
        background-size: 300px auto;
        background-position: right 55px;
    }
    @media screen and (max-width: 960px){
        background-size: 300px auto;
        background-position: right 90px;
    }
    @media screen and (max-width: 700px){
        background-size: 230px auto;
        background-position: right -25px
    }
`;

export const Content = styled.section`
    position: relative;
    padding-top: 60px;
    p{
        font-size: 16px;
        max-width: 640px;
        color: ${Colors.Secondary};
        line-height: 26px;
    }
    @media screen and (max-width: 700px){
        padding-top: 80px;
    }
`;

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    max-width: 700px;
    line-height: 60px;
    color: ${Colors.Secondary};
    @media screen and (max-width: 700px){
        font-size: 35px;
        line-height: 50px;
        padding-top: 100px;
    }

`;
