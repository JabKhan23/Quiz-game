import { useNavigate } from "react-router-dom";

const ThreeT4: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>  
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
  
        <h2>You fling the fork - it hits the bull's eye (or, in this case, the raider's eye)!<br/><br/>

The large man drops Tommy as he screams in pain. Before you get the chance to finish the job, the raider runs away, but your grandkids are safe.<br/><br/>

You have managed to protect them.
<br/><br/>


</h2> 
    <button onClick={() => navigate('/pt3t5')}>Next</button>  
      </div>
    );
}
  export default ThreeT4;