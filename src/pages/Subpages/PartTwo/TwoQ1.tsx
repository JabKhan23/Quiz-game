import { useNavigate } from "react-router-dom";

const TwoQ1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>   
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
     
        <h2>
        The year is 2035. The place is Gothic City.<br/><br/>

You wake up from your nightmare and wipe a few beads of sweat from your forehead.<br/><br/>

You are Brook Wade, billionaire philanthropist. You were once the boy from that awful dream, but that was a long time ago.<br/><br/>

You are lying in a lawn chair, out in your garden. It is dark outside - how long have you been asleep?<br/><br/>

An elegant voice breaks the silence: "It is time, master Wade."<br/><br/>

You turn around and see your butler, Albert. He points to the sky and you look up.<br/><br/>

A beaming light. A signal against the ashy clouds. A call for a hero to emerge from the dark.<br/><br/>

You squint: What is the signal in the sky?

<br/><br/>
</h2> 
        <button onClick={() => navigate('/pt2q2')}>It's your signal</button>
        <button onClick={() => navigate('/pt2q1w')}>It's a bat
        </button>
      </div>
    );
}
  export default TwoQ1;