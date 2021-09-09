// components
import Header from "../Header/Header";
import SocialAccounts from "../SocialAccounts/SocialAccounts";
// css
import './css/style.css';
import { HeroContainer, HeroTextDiv } from './css/styled';

const Hero = () => {
  return (
    <section>
      <Header />
      <HeroContainer>
        {/* self-info text */}
        <HeroTextDiv>
          <h3 className="white-text center-align">Yusuke</h3>
          <h5 className="white-text center-align">Backend Developer</h5>
        </HeroTextDiv>
        {/* social accounts */}
        <SocialAccounts />
      </HeroContainer>
    </section >
  )
}


export default Hero;