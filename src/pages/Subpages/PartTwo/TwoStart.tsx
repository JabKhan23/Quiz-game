import { useNavigate } from "react-router-dom";

const TwoStart: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>          
        <h1>Part 2: The Symbol</h1>
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
      

        <h2><br/>A man is behind prison bars, screaming: "I'll get out of here, just you wait!"<br/><br/>

End titles appear over him: this is the end of a film playing on the big screen. The credits roll.<br/><br/>

A boy jumps out of his seat and leaves the theatre with his father.<br/><br/>

Outside, the boy points to an alleyway. "Let's take the shortcut," he suggests.<br/><br/>

They go down the alleyway, but don't notice that they are being followed.<br/><br/>

</h2>
    <button onClick={() => navigate('/pt2t1')}>Next</button>  
      </div>
    );
}
  export default TwoStart;