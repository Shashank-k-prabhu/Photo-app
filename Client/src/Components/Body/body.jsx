import landingImage from "../Images/landingImage.png"
import "./body.css"
function LandingBody(){
  return (
    <div className="container">
      <img src={landingImage} alt="Landing Pic" className="imagestyles"></img>
      <p>
        Welcome to PixelPals!!Your photography destination! Discover a diverse
        range of talented photographers, their contact details, and stunning
        galleries. Fulfill your photography needs anytime, anywhere. Explore and
        capture moments with us!"
      </p>
    </div>
  );
}
export default LandingBody;