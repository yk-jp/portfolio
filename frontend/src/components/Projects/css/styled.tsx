import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

export const ProjectsSectionDiv = styled.div`
  margin-bottom: 30px;
`;

export const ProjectsDiv = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;

  /* laptop */
  @media(min-width:768px) { 
    flex-direction: row;
  }
`;