import "./newContact.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
export default function Contact() {
  return (
    <div className="newcontact" id="newcontact">
      <div className="left">
        <img src="assets/img4.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="icon">
          <InstagramIcon className="instagram" />
          <LinkedInIcon className="instagram" />
          <FacebookIcon className="instagram" />
          <EmailIcon className="instagram"/>
        </div>
      </div>
    </div>
  );
}