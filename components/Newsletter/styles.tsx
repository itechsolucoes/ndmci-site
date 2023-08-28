import styled from "styled-components";
import Colors from '../../styles/colors';

export const Container = styled.section`
    padding: 60px 15px;
`;

export const BoxNewsletter = styled.div`
    padding: 20px 30px;
    border: 2px solid ${Colors.Primary};
    border-radius: 8px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1.5fr;
    margin: 50px 0px;
    @media screen and (max-width: 880px){
        grid-template-columns: 1fr;
    }
`;

export const Text = styled.div`
    p{
        font-size: 15px;
        font-weight: 300;
        color: ${Colors.Secondary};
        padding: 10px 0px;
        margin: 0px;
    }
`;

export const H3 = styled.h3`
    color: ${Colors.Primary};
    font-size: 24px;
    font-weight: 500;
    padding: 0px;
    margin: 0px;
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    justify-content: space-between;
    grid-gap: 20px;
    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    width: 100%;
    min-height: 48px;
    border: 2px solid ${Colors.GreyBorderInput};
    border-radius: 3px;
    font-size: 14px;
    padding: 10px;
`;

export const Button = styled.button`
    border: none;
    font-size: 13px;
    display: block;
    padding: 10px;
    background-color: ${Colors.GreenHigh};
    color: #FFFFFF;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    border-radius: 3px;
    min-height: 48px;
    align-items: center;
    display: flex;
    justify-content: center;
`;
