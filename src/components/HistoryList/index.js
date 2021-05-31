import { CardContainerStyled,
         InfoStyled } from './HistoryList.style';

const HistoryList = props => {
  const {
    name,
    category,
    alt,
    photo,
    cost,
  } = props;


  return (
    <CardContainerStyled>
      <InfoStyled>
        <h3>{cost}</h3>
        <div>
          <span>{category}</span>
          <h3>{name}</h3>
        </div>
        <img alt={alt} src={photo}/>
      </InfoStyled>
    </CardContainerStyled>
  );
}

export default HistoryList;
