import styled from "styled-components";
import Colors from '../../styles/colors';

export const Container = styled.div`
    align-items: center;
    width: 100%;
    margin: 0px auto;
`;

export const Content = styled.section`
    display: flex;
    position: relative;
`;

export const Text = styled.div`
    p{
        font-size: 16px;
        line-height: 26px;
        color: ${Colors.Secondary};
        font-weight: 400;
    }
    @media screen and (max-width: 1100px){
        p{
            max-width: 550px;
        }
    }
    @media screen and (max-width: 970px){
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

export const Mission = styled.div`
    /* padding: 0px 50px; */
    /* margin: 0px auto; */
`;

export const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin-bottom: 10px;
    p{
        line-height: 27px;
        padding: 20px;
        font-size: 15px;
        margin: 0px
    }
    @media screen  and (max-width: 950px) {
        align-items: flex-start;
        p{
            padding: 0px 20px;
        }
    }
`;

export const Number = styled.div`
    font-size: 90px;
    color: #55711e;
    font-weight: 700;
    padding: 0px 20px;
    border-right: 1px solid #efefef;
    @media screen  and (max-width: 950px) {
        font-size: 60px;
        padding: 30px;
    }
`;

export const Medics = styled.div`
    margin: 80px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    position: relative;
    @media screen  and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
    @media screen  and (max-width: 780px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

export const BoxMedic = styled.div`
    z-index: 2;
    position: relative;
    background-color: #FFFFFF;
    display: grid;
    grid-auto-rows: auto auto 1fr;
    h4 {
        font-size: 20px;
        text-align: center;
        position: relative;
        margin-bottom: -11px;
        z-index: 2;
        span{
            padding: 0px 25px 25px 15px;
            background: #FFFFFF;
        }
    }
`;

export const ImageDoctor = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: top;
    justify-content: center;
    margin-top: 30px;
    img{
        border-radius: 100%;
    }
`;

export const Box = styled.div`
    border: 1px solid #414141;
    padding: 50px 24px 24px;
    text-align: center;
    z-index: 0;
    position: relative;
    h5{
        color: #cda970;
    }
    p{
      font-size: 13px;
      line-height: 20px;
    }
`;

