import styled from "styled-components";
import Colors from '../../styles/colors';

export const Container = styled.section`

`;

export const BoxContact = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-gap: 40px;
    align-items: flex-start;
    @media screen and (max-width: 880px){
        grid-template-columns: 1fr;
    }
`;

export const Text = styled.div`
    h2{
        padding-top: 0px;
        margin-top: 0px;
    }
    p{
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
        text-align: justify;
    }
`;


export const Form = styled.form`
    display: block;
`;

export const BoxInput = styled.div`
    width: 100%;
    margin: 0px 0px 20px 0px;
`;

export const Label = styled.label`
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.GrayDark};
    padding: 3px 0px;
    &:after{
        content: "*";
        color: red;
        margin-left: 5px;
    }
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${Colors.GreyBorderInput};
    padding: 10px 15px;
    border-radius: 3px;
`;

export const Textarea = styled.textarea`
    width: 100%;
    border: 1px solid ${Colors.GreyBorderInput};
    padding: 10px 15px;
    border-radius: 3px;
    resize: none;
`;

export const Double = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

export const One = styled.div`
    &.justify-end{
        justify-content: end;
        display: flex;
    }
`;

export const Button = styled.button`
    font-size: 13px;
    display: block;
    padding: 10px;
    background-color: ${Colors.GreenHigh};
    color: #FFFFFF;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    border-radius: 3px;
    margin-top: 20px;
    border: none;
`;

export const LabelError = styled.label`
    display: block;
    font-size: 12px;
    color: red;
    padding: 3px;
`