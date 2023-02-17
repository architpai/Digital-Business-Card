import FacebookIcon from "/src/assets/Facebook_Icon.png"
import InstagramIcon from "/src/assets/Instagram_Icon.png"
import LinkedInIcon from "/src/assets/Linkedin_Icon.png"
import GitHubIcon from "/src/assets/Github_Icon.png"
function handleIconClick(iconType){
    switch (iconType) {
        case "Facebook":
            window.location = "https://www.facebook.com/pai.archit/"
            break;
        case "Instagram":
            window.location = "https://www.instagram.com/paiarchit/"
            break;
        case "LinkedIn":
            window.location = "https://www.linkedin.com/in/paiarchit"
            break;
        case "Github":
            window.location = "https://github.com/architpai"
            break;
        default:
            break;
    }
}

export default function Footer(){
    return(
    <div className="Footer--container">
        <img src={FacebookIcon} alt="facebook-logo" onClick={()=>{handleIconClick("Facebook")}}/>
        <img src={InstagramIcon} alt="instagram-logo" onClick={()=>{handleIconClick("Instagram")}}/>
        <img src={LinkedInIcon} alt="linkedin-logo" onClick={()=>{handleIconClick("LinkedIn")}}/>
        <img src={GitHubIcon} alt="github-logo" onClick={()=>{handleIconClick("Github")}}/>
    </div>
    )
}