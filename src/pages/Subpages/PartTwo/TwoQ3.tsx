import { useNavigate } from "react-router-dom";

const TwoQ3: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div> 
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
     
        <h2>
        You pull out the right book and the bookcase splits vertically from the middle, revealing the entrance to your secret lair: the silver cave known as the Cutlery Basket.<br/><br/>

As you descend down the steps, you remember the fateful night your father died. The face of the criminal. The crazed look in his eyes. His weapon.<br/><br/>

What was the weapon?
<br/><br/>
</h2> 
        <button onClick={() => navigate('/pt2t2')}>A fork</button>
        <button onClick={() => navigate('/pt2q3w')}>A spoon
        </button>
      </div>
    );
}
  export default TwoQ3;