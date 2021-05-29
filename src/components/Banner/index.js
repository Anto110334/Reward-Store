import { StyledBanner, StyledBannerImage } from './banner.style';

const Banner = props => {
  const { banner } = props;

  return (
    <StyledBanner>
      <StyledBannerImage alt="banner" src={banner}/>
    </StyledBanner>
  );
}

export default Banner;
