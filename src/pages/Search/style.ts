import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(195, 202, 210, 0.242527), rgba(195, 202, 210, 0.242527)), linear-gradient(141.8deg, #D1D8E4 2.92%, #ACB7CD 111.13%);
`;

export const mainContent = styled.div`
    width: 94%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px #8CA4D8;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    margin-bottom: 3%;
`

export const pageTitle = styled.div`
    font-family: 'Poppins-Bold';
    font-weight: 700;
    font-size: 45px;
    line-height: 70px;
    text-align: center;
    color: rgba(20, 36, 59, 0.35);
    margin-top: 5%;
`

export const inputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 3%;
    align-items: center;
    justify-content: center;
`

export const inputTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: rgba(20, 36, 59, 0.35);
    margin-right: 2%;
`

export const inputBox = styled.input`
    width: 35%;
    height: 45px;
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: rgba(20, 36, 59, 0.7);
`


export const btnSearch = styled.button`
    width: 15%;
    height: 50px;
    background: rgba(16, 33, 65, 0.6);
    backdrop-filter: blur(11.5318px);
    border: none;
    border-radius: 10px;
    cursor: pointer;

    margin-left: 14%;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0px 5px 10px rgba(73, 90, 117, 0.222373);
`;
