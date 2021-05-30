import { StyledButton, StyledPoints } from './ovalButton.style';

const OvalButton = props => {
  const { points, children, variant } = props;

  return (
    <StyledButton variant={variant}>
      {
        points ?
          <StyledPoints>
            {points}
            <img alt="coin icon" src="/assets/coin.svg"/>
          </StyledPoints>
        : children
      }
    </StyledButton>
  );
}

export default OvalButton;
