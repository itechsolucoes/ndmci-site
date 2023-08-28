import styled from "styled-components";
import Colors from '../../styles/colors';

export const FooterContainer = styled.footer`
    margin-top: 100px;
    background-color: ${Colors.BgGreay};
    padding: 50px 15px 0px;
`;

export const Content = styled.div``;

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: 500px 200px;
    grid-gap: 50px;
    justify-content: space-between;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 740px){
        grid-template-columns: 1fr;
    }
`;

export const About = styled.div`
    p{
        padding-top: 10px;
        font-size: 13px;
        line-height: 23px;
        color: ${Colors.Secondary};
        opacity: 0.8;
        font-weight: 300;
    }
    @media screen and (max-width: 740px){
        padding-bottom: 50px;
    }
`;

export const Sinagure = styled.div`
    border-top: 2px solid ${Colors.GreyDefault};
    display: block;
    padding: 20px;
    font-size: 15px;
    text-align: center;
    font-weight: 300;
    opacity: 0.6;
`;


export const LinkMenu = styled.div`
    @media screen and (max-width: 740px){
        display: none;
    }
`;

export const H5 = styled.h5`
    font-size: 16px;
    color: ${Colors.Secondary};
    opacity: 0.8;
    font-weight: 500;
    margin: 0px;
    padding: 0px;

`;

export const Ul = styled.ul`
    list-style: none;
    padding: 20px 0px;
    margin: 0px;
`;

export const Li = styled.li`
    list-style: none;
    padding: 10px 0px;
    display: block;
    a{
        font-size: 13px;
        color: ${Colors.Secondary};
        opacity: 0.6;
        font-weight: 300;
    }
`;

export const Social = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-top: 20px;
    padding-bottom: 20px;
    grid-template-columns: 25px 25px 25px;
`;

export const LinkWhats = styled.a`
    position: fixed;
    right: 20px;
    bottom: 10px;
    z-index: 1000;
    justify-content: end;
    align-items: flex-end;
    display: flex;
    cursor: pointer;
    label{
        background-color: ${Colors.White};
        font-size: 13px;
        font-weight: 400;
        padding: 5px 15px;
        align-items: center;
        display: flex;
        border-radius: 3px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-right: 10px;
        max-height: 25px;
        cursor: pointer;
    }
`;