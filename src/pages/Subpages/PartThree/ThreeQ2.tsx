import { useNavigate } from "react-router-dom";

const ThreeQ2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/home')}>Home</button>
  
        <h2>
        You pull out some baby blue fabric from a cupboard and take it to the desk in the corner of the room.<br/><br/>

There's something on the desk. You blow the dust off of it: it's an old school, pedal-powered sewing machine. You decide to make Lucy a pleated skirt.<br/><br/>

How do you measure the pleats?
<br/><br/>
</h2>   
        <button onClick={() => navigate('/pt3t2')}>Use the fork</button>
        <button onClick={() => navigate('/pt3q2w')}>Eyeball it
        </button>
      </div>
    );
}
  export default ThreeQ2;