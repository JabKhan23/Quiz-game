import { useNavigate } from "react-router-dom";

const FourQ1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>

        <h2>
        Unlike most other class XC droids, you have amassed quite a few parts throughout the years: arms and legs, a head with eyes and a mouth. Most of these have been fashioned from the scrap you have collected, such as your LED lightbulb eyes.<br/><br/>
 
While it's not fancy enough to get you noticed by the robot nobility, at least it's something. You have always wanted to become popular and rich, but that seems like an impossible goal for an XC droid.<br/><br/>

You have been working all day, picking up random junk and tossing it in your cart. You had a hunch you'd get lucky today, but no good finds so far.<br/><br/>

Do you want to go home?
<br/><br/>
</h2>  
        <button onClick={() => navigate('/pt4q1w')}>Yes</button>
        <button onClick={() => navigate('/pt4t1')}>Not yet
        </button>
      </div>
    );
}
  export default FourQ1;