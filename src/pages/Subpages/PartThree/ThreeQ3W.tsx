import { useNavigate } from "react-router-dom";

const ThreeQ3W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    <div className="parthome">
      <button className="home" onClick={() => navigate('/home')}>Home</button>
      
        <h2>You find some yarn and get to work.<br/><br/>

Unfortunately, as the needles are quite thick, you can't knit the petals as tightly as you'd want them to be.<br/><br/>

The flower looks sad and withered; that's not what you were going for.
<br/><br/>
</h2> </div>
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default ThreeQ3W;