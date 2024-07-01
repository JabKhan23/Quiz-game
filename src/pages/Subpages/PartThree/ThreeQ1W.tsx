import { useNavigate } from "react-router-dom";

const ThreeQ1W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>   
      <button className="home" onClick={() => navigate('/home')}>Home</button>
     
        <h2>You do your best to brush Lucy's hair with your fingers, but it doesn't really work. Her hair ends up even frizzier; her head looks like a tumbleweed.<br/><br/>

Disaster.
<br/><br/>


</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default ThreeQ1W;