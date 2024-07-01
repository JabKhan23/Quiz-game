import { useNavigate } from "react-router-dom";

const FourT1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/home')}>Home</button>
  
        <h2>You're not ready to give up yet - just a bit longer.<br/><br/>

You keep searching and eventually find... something: a small and delicate rusted object, with a long, thin handle that becomes wider at one end. The wide end splits into four thin, spiky prongs.<br/><br/> You have no idea what it is, but it looks pretty interesting; you might be able to sell it.
<br/><br/>


</h2> 
    <button onClick={() => navigate('/pt4q2')}>Next</button>  
      </div>
    );
}
  export default FourT1;