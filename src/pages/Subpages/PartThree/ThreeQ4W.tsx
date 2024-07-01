import { useNavigate } from "react-router-dom";

const ThreeQ4W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/home')}>Home</button>
     
        <h2>You immediately surrender, pleading with the raider not to hurt the grandchildren. After all, you are seventy years old, what are you supposed to do - attack him?<br/><br/>

The raider takes you all hostage and forces you to make him home-cooked meals every single day; the kids only get to eat the leftovers. Everyone is relatively safe (for now), but your grandkids will never grow up to be big and strong; you have failed as a grandmother.
<br/><br/>
</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default ThreeQ4W;