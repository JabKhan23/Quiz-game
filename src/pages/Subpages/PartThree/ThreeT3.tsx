import { useNavigate } from "react-router-dom";

const ThreeT3: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
  
        <h2>You find some yarn and get to work.<br/><br/>

Although it's unconventional, this method works: you wrap the yarn in between the fork's spikes and build rows all the way to the top. This creates nice, thick, tightly knit petals which are sewn together using the needle.<br/><br/>

Lucy loves her new flower brooch and attaches it proudly to her top with a safety pin.<br/><br/>

Job done! But it's getting late, where is Tommy?
<br/><br/>


</h2>
    <button onClick={() => navigate('/pt3q4')}>Next</button>  
      </div>
    );
}
  export default ThreeT3;