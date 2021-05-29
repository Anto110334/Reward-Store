import { StyledBanner, StyledBannerTitle, StyledBannerImage } from './banner.style';

const Banner = props => {
  const { title, banner } = props;
  return (
    <StyledBanner>
      <StyledBannerTitle>{title}</StyledBannerTitle>
      <StyledBannerImage alt="banner" src={banner}/>
    </StyledBanner>
  );
}

export default Banner;
