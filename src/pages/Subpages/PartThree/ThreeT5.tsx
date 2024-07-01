import { useNavigate } from "react-router-dom";

const ThreeT5: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>     <div className="parthome">
      <button className="home" onClick={() => navigate('/home')}>Home</button>

        <h2>Time passes - it is late at night.<br/><br/>

You managed to calm the children down and tucked them into bed.<br/><br/>

You are now outside of your shack, in your wooden rocking chair. That raider still has your multi-purpose fork; you will need to go get it back. You remember your younger years: being a raider yourself; getting that fork back won't be a problem. But that's tomorrow's problem.<br/><br/>

Right now you relax and look up at the night sky, wondering if there's anything happening among the stars...
<br/><br/>


</h2>   </div>
    <button onClick={() => navigate('/pt4start')}>Continue to Part 4</button>  
      </div>
    );
}
  export default ThreeT5;