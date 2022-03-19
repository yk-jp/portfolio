import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// css
import {
  AccountContainer,
  TwitterDiv,
  LinkedInDiv,
  GitHubDiv,
  MailDiv,
} from "./css/styled";
// controller
import jqueryController from "./controllers/jqueryController";
// config
import config from "../../config/config";
const SocialAccounts = () => {
  jqueryController();

  return (
    <AccountContainer className="container">
      <LinkedInDiv>
        <a
          href={config.privateInfo.linkedIn}
          className="tooltipped"
          data-position="bottom"
          data-tooltip="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="orange-text text-darken-1"
            size="2x"
          />
        </a>
      </LinkedInDiv>

      <GitHubDiv>
        <a
          href={config.privateInfo.gitHub}
          className="tooltipped"
          data-position="bottom"
          data-tooltip="GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="orange-text text-darken-1"
            size="2x"
          />
        </a>
      </GitHubDiv>

      <MailDiv>
        <a
          href={`mailto:${config.privateInfo.email}`}
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Mail"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="orange-text text-darken-1"
            size="2x"
          />
        </a>
      </MailDiv>
    </AccountContainer>
  );
};

export default SocialAccounts;
