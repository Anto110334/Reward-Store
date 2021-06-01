import { StyledButton, StyledPoints } from './ovalButton.style';

const OvalButton = props => {
  const { points, 
          children, 
          variant, 
          active,
          onClick } = props;

  return (
    <StyledButton variant={variant} active={active} onClick={onClick}>
      {
        points ?
          <StyledPoints>
            {points}
            <img alt="coin icon" src="assets/coin.svg"/>
          </StyledPoints>
        : children
      }
    </StyledButton>
  );
}

export default OvalButton;
