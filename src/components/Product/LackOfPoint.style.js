import styled from 'styled-components';

export const LackOfPointContainerStyled = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 142px;
  height: 42px;
  position: absolute;
  background: #616161;
  mix-blend-mode: normal;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  >h2{
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    letter-spacing: -0.0329412px;
    color: #FFFFFF;
    font-weight: 300;
  }
`;

export const PriceStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  >h2{
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    letter-spacing: -0.0329412px;
    color: #FFFFFF;
    font-weight: 300;
  }
  >img{
    margin: .4rem 0 .2rem .3rem;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
`;
