import { ProjectContainer, ProjectmainImgDiv, ImgTitleSpan, MoreInfoButton, Img, ModalContainer, ModalContentDiv, ModalContentText, ModalChipDiv } from './css/styled';
import curry from '../../img/curry.jpg'; //delete it later this is a sample img.
import jqueryController from '../Project/controllers/jqueryController';
import './css/style.css';
const Project = () => {
  jqueryController();

  return (
    <ProjectContainer className="container">
      <ProjectmainImgDiv className="black card">
        <div className="break-word-all">
          <Img src={curry} alt="Error"></Img>
          <ImgTitleSpan id="projectTitle" className="white-text center-align">Youtube clone testte stste   ttsga ge aar eredww ww wwwwww wwwww ww faef e faef  fae fea</ImgTitleSpan>
        </div>

        <MoreInfoButton className="orange-text modal-trigger center-align waves-effect waves-orange" data-target="modal1">Read More</MoreInfoButton>

      </ProjectmainImgDiv>

      {/* project-detail */}
      <ModalContainer id="modal1" className="modal card grey darken-4">
        <div className="card-image">
          <Img src={curry} alt="Error"></Img>
        </div>

        <ModalContentDiv className="card-content">
          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1 break-word-all">Description</h5>
            <p className="center-align white-text break-word-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, qui possimus praesentium quibusdam maiores hic unde harum blanditiis repellendus doloremque eligendi reiciendis autem voluptate minus fuga, omnis officia magnam voluptatum debitis, ducimus odit. Cumque natus corporis eligendi iusto, quo delectus?</p>
          </ModalContentText>

          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1 break-word-all">What I Learnt</h5>
            <p className="center-align white-text break-word-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, qui possimus praesentium quibusdam maiores hic unde harum blanditiis repellendus doloremque eligendi reiciendis autem voluptate minus fuga, omnis officia magnam voluptatum debitis, ducimus odit. Cumque natus corporis eligendi iusto, quo delectus?</p>
          </ModalContentText>
          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1 break-word-all">Project Difficulties</h5>
            <p className="center-align white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, qui possimus praesentium quibusdam maiores hic unde harum blanditiis repellendus doloremque eligendi reiciendis autem voluptate minus fuga, omnis officia magnam voluptatum debitis, ducimus odit. Cumque natus corporis eligendi iusto, quo delectus?</p>
          </ModalContentText>
          <ModalContentText>
            <h5 className="center-align orange-text text-darken-1">Tech Stack</h5>
            <ModalChipDiv>
              <span className="chip orange-text text-darken-1 grey darken-3">
                testfafeafe
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
              <span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span><span className="chip orange-text text-darken-1 grey darken-3">
                test
              </span>
            </ModalChipDiv>
          </ModalContentText>
        </ModalContentDiv>

        <div className="modal-footer grey darken-4">
          <a className="waves-effect waves-orange btn-flat orange-text" href="#">Visit Website</a>
          <a className="waves-effect waves-orange btn-flat orange-text" href="#">GitHub</a>
          <a className="modal-close waves-effect waves-orange btn-flat orange-text">Close</a>
        </div>
      </ModalContainer>
    </ProjectContainer>
  );
};

export default Project;