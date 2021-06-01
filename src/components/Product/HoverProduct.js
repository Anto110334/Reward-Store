import { DetailContainerStyled,
         IconBuyStyled,
         IconBuyHoverStyled,
         HoverContainerStyled,
         HoverProductContainerStyled,
         RedeemStyled,
         PriceStyled } from './HoverProduct.style';
import redeemData from '../../services/redeem';

function HoverProduct( props ) {
  const {
    cost,
    productId,
    setPopupShow
  } = props;

  const handleClickRedeem = (productId) => {
    redeemData(productId);
    setPopupShow(prev => !prev);
  }

  return (
    <HoverProductContainerStyled>
      <IconBuyStyled alt="buy" src="assets/buy-blue.svg"/>
      <DetailContainerStyled >
        <HoverContainerStyled>
          <IconBuyHoverStyled alt="buy" src="assets/buy-white.svg"/>
          <RedeemStyled>
            <PriceStyled>
              <h2>{cost}</h2> 
              <img alt="coin icon" src="assets/coin.svg"/>
            </PriceStyled>
            <button onClick={()=> handleClickRedeem(productId)}>
              Redeem now
            </button>
          </RedeemStyled>
        </HoverContainerStyled>
      </DetailContainerStyled>
    </HoverProductContainerStyled>
  )
}

export default HoverProduct;
