import { useNavigate } from "react-router-dom";

const ThreeQ1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>   <div className="parthome">
      <button className="home" onClick={() => navigate('/home')}>Home</button>
     
        <h2>
        You look at Lucy: she is lovely as ever, but her hair is a mess and her clothes are old and dirty.<br/><br/> 

You decide to dedicate your day to giving her a makeover, starting with the hair.<br/><br/>

How do you brush her hair?
<br/><br/>
</h2> </div>
        <button onClick={() => navigate('/pt3q1w')}>With your fingers</button>
        <button onClick={() => navigate('/pt3t1')}>With the fork
        </button>
      </div>
    );
}
  export default ThreeQ1;