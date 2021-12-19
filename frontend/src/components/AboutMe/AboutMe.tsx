import { AboutMeContainer, AboutMeTextDiv } from './css/styled';
import './css/style.css';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeTextDiv>
        <h4 id="AboutMe" className="white-text center-align margin-bottom-30px orange-text text-darken-1">About Me</h4>
        <div className="container">
          <h5 className="white-text center-align flow-text">Hello, I'm Yusuke. I'm a Full Stack Developer, having a strong passion for learning technologies, working on projects. Check out my projects if you like :)</h5>
        </div>
      </AboutMeTextDiv>
    </AboutMeContainer>
  )
};

export default AboutMe;