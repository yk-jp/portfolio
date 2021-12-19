// components
import Header from "../Header/Header";
import SocialAccounts from "../SocialAccounts/SocialAccounts";

import { HeroContainer, SelfIntroContainer, SelfIntroTextDiv } from './css/styled';

const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <SelfIntroContainer>
        {/* self-info text */}
        <SelfIntroTextDiv>
          <h2 className="white-text center-align">Yusuke</h2>
          <h4 className="white-text center-align">Full Stack Developer</h4>
        </SelfIntroTextDiv>
        {/* social accounts */}
        <SocialAccounts />
      </SelfIntroContainer>
    </HeroContainer>
  )
}


export default Hero;