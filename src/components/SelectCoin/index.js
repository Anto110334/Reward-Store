import { ContainerStyled } from './SelectCoin.style';
import OvalButton from '../OvalButton';
import pointsData from '../../services/points/index';

const SelectCoin = () => {
  
  const handleclick = (amount) =>  {
    pointsData(amount);
  }

  return (
      <ContainerStyled>
          <OvalButton 
            points={1000}
            variant={"points"}
            onClick={() => handleclick(1000)}
          />
          <OvalButton 
            points={5000}
            variant={"points"}
            onClick={() => handleclick(5000)}
          />
          <OvalButton 
            points={7500}
            variant={"points"}
            onClick={() => handleclick(7500)}
          />
      </ContainerStyled>
  )
}

export default SelectCoin;
