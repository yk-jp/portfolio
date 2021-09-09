import { AboutMeContainer, AboutMeTextDiv } from './css/styled';
import './css/style.css';

const AboutMe = () => {
  return (
    <section>
      <AboutMeContainer>
        <AboutMeTextDiv>
          <h5 id="AboutMe" className="white-text center-align margin-bottom-30px">About Me</h5>
          <div className="container">
            <h5 className="white-text center-align flow-text">Hello, I am Yusuke. I am a Backend Developer, having a strong passion for learning technologies, working on projects. Check out my projects if you like :)</h5>
          </div>
        </AboutMeTextDiv>
      </AboutMeContainer>
    </section>
  )
};

export default AboutMe;