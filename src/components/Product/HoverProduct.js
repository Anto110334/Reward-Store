import { DetailContainerStyled,
         IconBuyStyled,
         IconBuyHoverStyled,
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
      <IconBuyStyled alt="buy" src="/assets/buy-blue.svg"/>
      <DetailContainerStyled >
        <HoverContainerStyled>
          <IconBuyHoverStyled alt="buy" src="/assets/buy-white.svg"/>
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
