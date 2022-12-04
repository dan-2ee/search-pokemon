import styled from 'styled-components';


export const mainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(141.8deg, #ECEEF8 20%, #CCCFDE 50.13%);
`;

export const titleContainer = styled.div`
  height: fit-content;
`;

export const mainTitle = styled.div`
  font-size: 165px;
  font-weight: 700;
  font-family: 'Poppins-Bold';
  line-height: 250px;
  position: relative;
  color: rgba(78, 83, 94, 0.2);
`;

export const subTitle = styled.div`
  white-space: pre-line;
  font-weight: 700;
  font-size: 60px;
  font-family: 'Poppins-Bold';
  line-height: 67px;
  position: relative;
  margin-top: -14%;
  color: #4E535E;
  mix-blend-mode: normal;
  opacity: 0.4;
  text-align: left;
`;

export const btnStart = styled.button`
  width: 350px;
  height: 70px;
  background: rgba(16, 33, 65, 0.247934);
  border-radius: 100px;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 13%;
  cursor: pointer;
  box-shadow: 5px 5px rgba(16, 33, 65, 0.3);
`;