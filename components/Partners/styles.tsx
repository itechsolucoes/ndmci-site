import styled from "styled-components";
import Colors from '../../styles/colors';

export const Slider = styled.div`
    width: 100%;
    display: block;
    padding: 20px 0px;
    background-color: ${Colors.BgGreay};
    margin: 50px auto;
    justify-content: center;
    display: flex;
    overflow: visible!important;;
`;

export const Partner = styled.div`
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    height: auto;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 0px;
    padding: 40px 0px;
`;

export const Photo = styled.div`
    width: 350px;
    height: 100px;
    position: relative;
    padding: 0px;
    margin: 0px;
`;