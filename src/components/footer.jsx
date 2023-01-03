import TwitterIcon from '../assets/icons/TwitterIcon.png'
import FacebookIcon from '../assets/icons/FacebookIcon.png'
import InstagramIcon from '../assets/icons/InstagramIcon.png'
import GitHubIcon from '../assets/icons/GitHubIcon.png'

export default function Footer() {
    return (
        <footer className="footerWrapper">
            <img src={TwitterIcon} alt="Twitter Icon" className="socialIcons" />
            <img src={FacebookIcon} alt="Facebook Icon" className="socialIcons" />
            <img src={InstagramIcon} alt="Insta Icon" className="socialIcons" />
            <img src={GitHubIcon} alt="Githubs Icon" className="socialIcons" />
        </footer>
    )
}