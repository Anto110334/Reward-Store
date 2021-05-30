import { DetailContainerStyled,
         IconPayStyled,
         IconPayHoverStyled,
         HoverContainerStyled,
         HoverProductContainerStyled,
         RedeemStyled,
         PriceStyled } from './HoverProduct.style';

function HoverProduct( props ) {
  const {
    cost
  } = props;

  return (
    <HoverProductContainerStyled>
      <IconPayStyled>icono</IconPayStyled>
      <DetailContainerStyled >
        <HoverContainerStyled>
          <IconPayHoverStyled>icono</IconPayHoverStyled>
          <RedeemStyled>
            <PriceStyled>
              <h2>{cost}</h2> 
              <img alt="coin icon" src="/assets/coin.svg"/>
            </PriceStyled>
            <button>Redeem now</button>
          </RedeemStyled>
        </HoverContainerStyled>
      </DetailContainerStyled>
    </HoverProductContainerStyled>
  )
}

export default HoverProduct;
