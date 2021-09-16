import { ProjectsContainer, ProjectsSectionDiv, ProjectsDiv } from './css/styled';
import Project from '../Project/Project';
import projectsData from '../../assets/projects/projectsData';
const Projects = () => {

  return (
    <ProjectsContainer className="container">
      <ProjectsSectionDiv>
        <h4 id="Projects" className="center-align orange-text text-darken-1">Projects</h4>
      </ProjectsSectionDiv>

      {/* main display */}
      <ProjectsDiv id="project">
        {projectsData.map((project, index) => {
          return (
            <div key={index}>
              <Project {...project}/>
            </div>
          )
        })}

      </ProjectsDiv>
    </ProjectsContainer>
  );

};

export default Projects;