import { ProjectContainer, ProjectmainImgDiv, ImgTitleSpan, MoreInfoButton, Img, ModalContainer, ModalContentDiv, ModalContentText, ModalChipDiv } from './css/styled';
import './css/style.css';
import jqueryController from '../Project/controllers/jqueryController';
import IProject from '../../interfaces/IProject';
const Project = (project: IProject) => {
  jqueryController();
  console.log(project);
  return (
    <ProjectContainer className="container">
      <ProjectmainImgDiv className="black card">
        <div className="break-word-all">
          <Img src={project.image} alt="Error"></Img>
          <ImgTitleSpan id="projectTitle" className="white-text center-align">{project.title}</ImgTitleSpan>
        </div>
        <MoreInfoButton className="orange-text modal-trigger center-align waves-effect waves-orange" data-target={project.title}>Read More</MoreInfoButton>
      </ProjectmainImgDiv>

      {/* project-detail */}
      <ModalContainer id={project.title} className="modal card grey darken-4">
        <div className="card-image">
          <Img src={project.image} alt="Error"></Img>
        </div>

        <ModalContentDiv className="card-content">
          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1 break-word-all">Description</h5>
            <p className="center-align white-text break-word-all">{project.description}</p>
          </ModalContentText>

          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1 break-word-all">What I Learnt</h5>
            <p className="center-align white-text break-word-all">{project.whatILearnt}</p>
          </ModalContentText>
          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1 break-word-all">Project Difficulties</h5>
            <p className="center-align white-text">{project.projectDifficulties}</p>
          </ModalContentText>
          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1">Tech Stack</h5>
            <ModalChipDiv>
              {project.techStack.map((tech, index) => {
                return <span key={index} className="chip orange-text text-darken-1 grey darken-3">
                  {tech}
                </span>
              })}
            </ModalChipDiv>
          </ModalContentText>
        </ModalContentDiv>

        <div className="modal-footer grey darken-4">
          {project.link.visitWebsite &&
            <a href={project.link.visitWebsite} className="waves-effect waves-orange btn-flat orange-text">Visit Website</a>
          }
          <a href={project.link.gitHub} className="waves-effect waves-orange btn-flat orange-text">GitHub</a>
          <a className="modal-close waves-effect waves-orange btn-flat orange-text">Close</a>
        </div>
      </ModalContainer>
    </ProjectContainer>
  );
};

export default Project;