import { useNavigate } from "react-router-dom";

const FourQ2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>  
      <button className="home" onClick={() => navigate('/home')}>Home</button>
  
        <h2> 
        You take the curious object to Tin, the scrap trader.<br/><br/>

"I believe that is a fork," it says. "The humans originally designed them as tools for feeding themselves, but my records say they were used for many things as time went on."<br/><br/>

"I see," you reply. "Well, it's yours for 10 Edisons."<br/><br/>

"I'll give you 3."<br/><br/>

"3?! You could probably use it to unscrew or recalibrate yourself. 5."<br/><br/>

"No. 3. That's enough to play the Feature Machine once."<br/><br/>

What is your decision?
<br/><br/>
</h2> 
        <button onClick={() => navigate('/pt4q3')}>Keep the fork</button>
        <button onClick={() => navigate('/pt4q2w')}>Sell the fork
        </button>
      </div>
    );
}
  export default FourQ2;