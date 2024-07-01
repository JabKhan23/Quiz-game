import { useNavigate } from "react-router-dom";

const FourQ3: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>  
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
   
        <h2>
        You decide to keep the fork, there's something special about it. You go home to your 1.5 meter wide by 1.5 meter long by 1.8 meter tall cubicle.<br/><br/>

As you are cleaning the rusty fork, you remember that today is Wing Commemoration Day : a yearly event remembering the destruction of the Daedalus-4's former companion ship, the Icarus-5. Unlike most yearly events, this one is open to robots of all classes. All you need to have is a complete face.<br/><br/>

You decide to go. Before you leave, you realise something is missing. You don't have a nose. <br/><br/>

You can't go without a nose.<br/><br/>

Can you?
<br/><br/>
</h2> 
        <button onClick={() => navigate('/pt4t2')}>Use the fork as a nose</button>
        <button onClick={() => navigate('/pt4q3w')}>Go without a nose
        </button>
      </div>
    );
}
  export default FourQ3;