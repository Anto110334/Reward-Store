import HoverProduct from './HoverProduct';
import LackOfPoint from './LackOfPoint';
import { CardContainerStyled,
         InfoStyled } from './Product.style';

const Product = props => {
  const {
    productId,
    name,
    category,
    alt,
    photo,
    cost,
    UserPoints,
    setPopupShow
  } = props;

  const lack = cost >= UserPoints;

  return (
    <CardContainerStyled lack={lack}>
      {
        lack ? <LackOfPoint cost={cost} UserPoints={UserPoints}/> 
             :  <HoverProduct cost={cost} 
                              productId={productId}
                              setPopupShow={setPopupShow}/>
      }
      <InfoStyled>
        <img alt={alt} src={photo}/>
        <div>
          <span>{category}</span>
          <h3>{name}</h3>
        </div>
      </InfoStyled>
    </CardContainerStyled>
  );
}

export default Product;
