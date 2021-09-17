import styled from "styled-components";

export const ProjectContainer = styled.div`
  display:flex;
  justify-content:center;
 `;

export const ProjectmainImgDiv = styled.div`
  width:100%;
  height:auto;
  position:relative;
  display:flex;
  justify-content:center;
  margin:10px;
 `;

export const ImgTitleSpan = styled.span`
  width:100%;
  font-weight: bold;
  position:absolute;
  display: block;
  top:50%;
  left:50%;
  margin:0;
  padding:0;
  font-size:1.2em;
  --ms-transform: translate(-50%,-50%);
  --webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  overflow-wrap: break-word;
`;

export const MoreInfoButton = styled.button` 
  top:80%;
  left:50%;
  margin:auto;
  position:absolute;
  background-color:transparent;
  margin:0;
  padding:0;
  --ms-transform: translate(-50%,-80%);
  --webkit-transform: translate(-50%,-80%);
  transform: translate(-50%,-80%);
  margin-top:10px;
  padding:10px;
`;

export const Img = styled.img``;

export const ModalContainer = styled.div``;


const ModalContentDefault = styled.div`
  display:flex;
  flex-direction:column;
`;

export const ModalContentDiv = styled(ModalContentDefault)``;


export const ModalContentText = styled(ModalContentDefault)`
  word-break: break-all;
`;

export const ModalChipDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
`;