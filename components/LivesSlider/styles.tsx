import styled from "styled-components";

export const Container = styled.section`
    padding: 20px 0px;
    display: block;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 50%;
    grid-gap: 30px;
    padding: 0px 15px;
    @media screen and (max-width: 880px){
        grid-template-columns: 1fr;
    }
`;

export const Text = styled.div`
    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
`;

export const Slider = styled.div`
    iframe{
        border: none;
    }
`;

export const Video = styled.div`
    padding: 20px;
    height: 320px;
    border-radius: 12px;
`;

export const SlideContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: auto;
`;


export const Prev = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    position: absolute;
    top: 130px;
    left: 50px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Next = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    position: absolute;
    top: 130px;
    right: 50px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Div = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;

`
