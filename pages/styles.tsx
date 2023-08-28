import styled from "styled-components";
import Colors from '../styles/colors';

export const ContainerDoctor = styled.section`
    background-color: ${Colors.BgGreay};
    padding: 10px 0px 20px;
    margin: 100px 0px 0px;
`;

export const HeaderTitle = styled.div`
    text-align: center;
    padding: 30px 0px 0px;
    h2{
        margin: 0px;
        padding: 0px;
    }
    p{
        font-size: 20px;
        font-weight: 300;
        color: ${Colors.Secondary};
        margin: 0px 0px 30px;
        padding: 0px;
    }
`;

export const ContainerPartners = styled.section`
    padding: 50px 15px;
    h2{
        text-align: center;
    }
`;