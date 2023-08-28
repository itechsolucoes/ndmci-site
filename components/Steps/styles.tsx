import styled from "styled-components";
import Colors from '../../styles/colors';

export const Container = styled.div`
    padding-top: 50px;
`;

export const Content = styled.section`

`;

export const Header = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    h2{
        padding: 0px;
        margin: 0px;
        text-align: center;
    }
    p{
        font-size: 20px;
        font-weight: 300;
        margin: 0px;
        padding: 0px
    }
`;

export const StepsList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin: 40px auto;
    padding: 0px;
    @media screen and (max-width: 950px){
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }
    @media screen and (max-width: 740px){
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
    }
`;

export const Number = styled.div`
    font-size: 26px;
    color: ${Colors.White};
    padding: 10px;
    background-color: ${Colors.Primary};
    display: inline-block;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${Colors.Secondary};
    padding: 15px 0px;
    text-transform: uppercase;
`;

export const Step = styled.li`
    background-color: ${Colors.BgGreay};
    padding: 40px 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px;
    p{
        font-size: 12px;
        font-weight: 400;
        color: ${Colors.Secondary};
        line-height: 17px;
        margin: 0px;
        padding: 0px
    }
    &:hover{
        background-color: ${Colors.Primary};
        ${Number}{
            background-color: ${Colors.White};
            color: ${Colors.Primary};
        }
        p, ${Title}{
            color: ${Colors.White};
        }
    }
`;
