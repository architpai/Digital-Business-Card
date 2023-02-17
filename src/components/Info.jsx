import EmailIcon from "/src/assets/Icon.png"
import ProfileImage from "/src/assets/me.jpeg"
function emailButton(){
    window.location = "mailto:pai.archit@outlook.com";
}

export default function Info(){
    return(
    <div className="Info--container">
        <img className="Info-Profile-Image" src={ProfileImage} alt="proile image"/>
        <h1 className="Info--text-title">Archit Pai</h1>
        <p className="Info--text-subtitle">Frontend Developer</p>
        <p className="Info--text"><a className="Info--text-link" href="https://portfolio-architpai.netlify.app/">portfolio.architpai</a></p>
        <button className="Info--text-button" onClick={emailButton}><img className="Info-text-button-icon" src={EmailIcon}/>Email</button>
    </div>)
}