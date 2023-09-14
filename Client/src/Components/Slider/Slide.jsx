
import "./slide.css";
/*const setUrl=(props) =>{

}*/
const Slide = (props) => {
  return (
    <div className="card">
      <div className="background-image" >
        <img src={props.url} className="product--image " alt="product" />
      </div>
      <div className="foreground-text" /*onClick={setUrl(props)}*/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Slide;