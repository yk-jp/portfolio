import styled from "styled-components";

export const ProjectContainer = styled.div`
  
`;

export const ProjectmainImgDiv = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  padding:10px;
  width:100%;
`;

export const ImgTitleSpan = styled.h3`
  position:absolute;
  top:50%;
  left:50%;
  margin:0;
  padding:0;
  --ms-transform: translate(-50%,-50%);
  --webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
`;

export const Img = styled.img`
  opacity: 0.5;
  width:80vw;
  height:20vh;

   /* laptop */
   @media(min-width:768px) { 
    width:30vw;
    height:25vh;
  }
`;


