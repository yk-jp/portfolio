import SocialAccounts from '../SocialAccounts/SocialAccounts';
import { ContactContainer, ContactTextDiv } from './css/styled';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTextDiv>
        <h4 id="Contact" className="center-align margin-bottom-30px orange-text text-darken-1">Contact</h4>
      </ContactTextDiv>
      {/* social accounts */}
      <SocialAccounts />
    </ContactContainer>
  );
};

export default Contact;