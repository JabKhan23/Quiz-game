import { useNavigate } from "react-router-dom";

const FourQ2W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
   
        <h2>You sell the fork and travel to the Daedalus's casino to play the Feature Machine.<br/><br/>

Ah, the Feature Machine; Tin told you humans used similar devices a long time ago.<br/><br/>

Here's how it works: for only 3 Edisons you can try your luck and might get a random part; many robots spend their entire income on it. The luckiest get an arm or a leg. Others get an eye or an ear. Most get absolutely nothing.<br/><br/>

You insert the credits and pull the handle.<br/><br/>

You get absolutely nothing.
<br/><br/>


</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default FourQ2W;