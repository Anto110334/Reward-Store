import { LackOfPointContainerStyled,
         PriceStyled } from './LackOfPoint.style';

function LackOfPoint( props ) {
    const {
      cost,
      UserPoints
    } = props;

    return (
        <LackOfPointContainerStyled>
            <PriceStyled>
                <h2>You need {cost - UserPoints}</h2>
                <img alt="coin icon" src="/assets/coin.svg"/>
            </PriceStyled>
        </LackOfPointContainerStyled>
    )
}

export default LackOfPoint;
