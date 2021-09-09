import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
// css
import { AccountContainer, TwitterDiv, LinkedInDiv, GitHubDiv, MailDiv, ResumeDiv } from './css/styled';
// controller
import ToolTipsController from './controllers/ToolTipsController';
const SocialAccounts = () => {

  ToolTipsController();

  return (
    <AccountContainer>
      <TwitterDiv>
        <a className="tooltipped" data-position="bottom" data-tooltip="Twitter">
          <FontAwesomeIcon icon={faTwitter} className="orange-text text-darken-1" size="2x" />
        </a>
      </TwitterDiv>

      <LinkedInDiv>
        <a className="tooltipped" data-position="bottom" data-tooltip="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} className="orange-text text-darken-1" size="2x" />
        </a>
      </LinkedInDiv>

      <GitHubDiv>
        <a className="tooltipped" data-position="bottom" data-tooltip="GitHub">
          <FontAwesomeIcon icon={faGithub} className="orange-text text-darken-1" size="2x" />
        </a>
      </GitHubDiv>

      <MailDiv>
        <a className="tooltipped" data-position="bottom" data-tooltip="Mail">
          <FontAwesomeIcon icon={faEnvelope} className="orange-text text-darken-1" size="2x" />
        </a>
      </MailDiv>
      <ResumeDiv>
        <a className="tooltipped" data-position="bottom" data-tooltip="Resume">
          <FontAwesomeIcon icon={faFile} className="orange-text text-darken-1" size="2x" />
        </a>
      </ResumeDiv>
    </AccountContainer >
  );
};


export default SocialAccounts;