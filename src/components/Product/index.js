import HoverProduct from './HoverProduct';
import LackOfPoint from './LackOfPoint';
import { CardContainerStyled,
         InfoStyled } from './Product.style';

const Product = props => {
  const {
    name,
    category,
    alt,
    photo,
    cost,
    UserPoints
  } = props;

  const lack = cost >= UserPoints;

  return (
    <CardContainerStyled lack={lack}>
      {
        lack ? <LackOfPoint/> :  <HoverProduct/>
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
