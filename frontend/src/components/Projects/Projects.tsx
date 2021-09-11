import { ProjectsContainer, ProjectsSectionDiv, ProjectsDiv } from './css/styled';
import Project from '../Project/Project';
const Projects = () => {
  return (
    <ProjectsContainer className="container">
      <ProjectsSectionDiv>
        <h4 id="Projects" className="center-align orange-text text-darken-1">Projects</h4>
      </ProjectsSectionDiv>

      <ProjectsDiv id="project">
        <div>
          <Project />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Project />
        </div>
      </ProjectsDiv>

    </ProjectsContainer>
  );

};

export default Projects;