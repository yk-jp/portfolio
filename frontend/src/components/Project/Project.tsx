import { ProjectContainer, ProjectmainImgDiv, ImgTitleSpan, Img } from './css/styled';
import curry from '../../img/curry.jpg';
import jqueryController from '../Project/controllers/jqueryController';
const Project = () => {
  jqueryController();

  return (
    <ProjectContainer className="container">
      <ProjectmainImgDiv className="black">
        <Img src={curry} alt="Error" className="w-100 modal-trigger" data-target="modal1"></Img>
        {/* <img src={curry} alt="Error" className="opacity-05 w-100" /> */}
        <ImgTitleSpan id="projectTitle" className="flow-text white-text">Title</ImgTitleSpan>

        {/* project-detail */}
        <div id="modal1" className="modal grey darken-4">
          <div className="modal-content">
          <Img src={curry} alt="Error" className="w-100"></Img>
          <h4 className=" white-text">Project Detail</h4>
          </div>
          <div className="modal-footer grey darken-4">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text">Close</a>
          </div>
        </div>
        {/* <a className="waves-effect waves-orange btn-small white orange-text text-darken-1">More Info</a> */}
      </ProjectmainImgDiv>
    </ProjectContainer>
  );
};

export default Project;