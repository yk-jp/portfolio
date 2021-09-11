import styled from "styled-components";

export const ProjectContainer = styled.div`
  height:auto;
`;

export const ProjectmainImgDiv = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  padding:10px;
  width:100%;
`;

export const ImgTitleSpan = styled.p`
  width:60vw;
  position:absolute;
  top:50%;
  left:50%;
  margin:0;
  padding:0;
  font-size:1em;
  --ms-transform: translate(-50%,-50%);
  --webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  overflow-wrap: break-word;
  @media(min-width:768px) { 
    width:17vw;
  }
`;

export const MoreInfoButton = styled.button`
  width:15vw;
  height:5vh;
  position:absolute;
  font-size:0.6em;
  top:80%;
  left:50%;
  margin:0;
  padding:0;
  --ms-transform: translate(-50%,-50%);
  --webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);

  background-color:transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media(min-width:768px) { 
    width:10vw;
    height:5vh;
    font-size:1em;
  }
`;

export const Img = styled.img`
  opacity:0.5;
  width:80vw;
  height:auto;

   /* laptop */
   @media(min-width:768px) { 
    width:21vw;
    height:20vh;
  }
`;

export const ModalContainer = styled.div`
  width:80vw;
  height:auto;
  /* laptop */
  @media(min-width:768px) { 
    width:45vw;
  }

  // desktop
  @media (min-width: 1200px) {
    width:35vw;
  } 
`;


const ModalContentDefault = styled.div`
  display:flex;
  flex-direction:column;
`;

export const ModalContentDiv = styled(ModalContentDefault)``;


export const ModalContentText = styled(ModalContentDefault)``;

export const ModalChipDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
`;