import { ProjectContainer, ProjectmainImgDiv, ImgTitleSpan,Img } from './css/styled';
import './css/style.css';
import curry from '../../img/curry.jpg';
const Project = () => {

  return (
    <ProjectContainer className="container">
        <ProjectmainImgDiv className="black">
        <Img src={curry} alt="Error"  className="w-100"></Img>
          {/* <img src={curry} alt="Error" className="opacity-05 w-100" /> */}
          <ImgTitleSpan id="projectTitle" className="flow-text white-text">
            aaa
          </ImgTitleSpan>
        </ProjectmainImgDiv>
    </ProjectContainer>
  );
};

export default Project;