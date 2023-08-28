import styled from "styled-components";
import Colors from '../../styles/colors';

export const Slider = styled.div`
    width: 100%;
    display: block;
    padding: 20px;
    /* padding-right: 300px; */
    margin: 0px auto;
`;

export const Medic = styled.div`
    width: 410px;
    max-width: 410px;
    min-width: 410px;
    height: auto;
    background-color: ${Colors.White};
    border-radius: 5px;
    overflow: hidden;
    /* margin: 15px; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    &.transparent{
        background: transparent;
        box-shadow: none;
    }

    @media screen and (max-width: 450px){
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        padding: 10px;
        margin: 0px;
    }
`;

export const Photo = styled.div`
    width: 412px;
    height: 433px;
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    padding: 15px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    min-height: 80px;
    align-items: flex-start;
`;

export const Name = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${Colors.GrayDark};
    padding: 0px 5px 5px 0px;
`;

export const Clinic = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${Colors.Primary};
`;

export const CRM = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.Secondary};
    text-align: right;
`;


export const Infos = styled.ul`
    padding: 0px;
    margin: 15px 0px 0px;
    list-style: none;
`;

export const Info = styled.li`
    padding: 7px 0px;
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.GreyDarkLigth};
    display: grid;
    grid-template-columns: 12px 1fr;
    grid-gap: 5px;
    align-items: flex-start;
    line-height: 16px;
`;

export const MiniCV = styled.p`
    padding: 0px 0px 8px;
    font-size: 12px;
    font-weight: 400;
    color: ${Colors.GreyDarkLigth};
    line-height: 16px;
    min-height: 80px;
`;

export const ButtonLink = styled.a`
    font-size: 13px;
    display: block;
    padding: 10px;
    background-color: ${Colors.GreenHigh};
    color: #FFFFFF;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    border-radius: 3px;
`;

export const Prev = styled.div`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    position: absolute;
    top: 300px;
    left: 50px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Next = styled.div`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    position: absolute;
    top: 300px;
    right: 50px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;