import styled from "styled-components";

// container
export const AccountContainer = styled.div`
  display:flex;
  justify-content:space-around;
  width:70%;
  margin-top:20px;

  /* laptop */
  @media(min-width:768px) { 
    width:55%;
  }
  
  /* desktop */
  @media(min-width:1200px) {
    width:30%;
  }
`;

// deafult sizing for each icon
const sharedAccountSizing = styled.div``;

// twitter 
export const TwitterDiv = styled(sharedAccountSizing)``;
// linked in 
export const LinkedInDiv = styled(sharedAccountSizing)``;
// GitHub 
export const GitHubDiv = styled(sharedAccountSizing)``;
// Mail 
export const MailDiv = styled(sharedAccountSizing)``;
// redume 
export const ResumeDiv = styled(sharedAccountSizing)``;
