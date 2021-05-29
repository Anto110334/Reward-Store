import { DetailContainerStyled,
         IconPayStyled,
         IconPayHoverStyled,
         HoverContainerStyled,
         HoverProductContainerStyled,
         RedeemStyled} from './HoverProduct.style';

function HoverProduct() {

  return (
    <HoverProductContainerStyled>
      <IconPayStyled>icono</IconPayStyled>
      <DetailContainerStyled >
        <HoverContainerStyled>
          <IconPayHoverStyled>icono</IconPayHoverStyled>
          <RedeemStyled>
            <h2>12.000 <span>¤</span></h2>
            <button>Redeem now</button>
          </RedeemStyled>
        </HoverContainerStyled>
      </DetailContainerStyled>
    </HoverProductContainerStyled>
  )
}

export default HoverProduct;
