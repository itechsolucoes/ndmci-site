import styled from "styled-components";
import Colors from '../../styles/colors';

export const ContainerNav = styled.div`
    width: 100%;
    padding: 0px;
    height: auto;
    display: grid;
    align-items: center;
    z-index: 10;
    position: fixed;
    border-bottom: 1.5px solid ${Colors.GreyDefault};
    background-color: ${Colors.BgGreay};

`;

export const Nav = styled.nav`

`;

export const List = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* grid-template-columns: repeat(3, auto) repeat(3, 1.5fr) repeat(3, auto); */
`;

export const Item = styled.li`
    list-style: none;
    min-height: 70px;
    min-width: 100px;
    margin: 0 5px;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 1400px) {
        min-width: 100px;
    }
    @media screen and (max-width: 740px){
        display: none;
    }
    &.logo{
        width: 140px;
        height: 40px;
        position: relative;
        width: 100%;
        @media screen and (max-width: 740px){
            display: flex;
            width: 100%;
        }
    }
    a{
        font-size: 11px;
        font-weight: 500;
        color: ${Colors.Secondary};
        &.active, &:hover{
            color: ${Colors.Primary}
        }
    }
`;

